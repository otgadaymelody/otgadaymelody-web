import React, { type FC, useState, type ReactNode, useEffect } from 'react';
import { useForm, type SubmitHandler, useWatch } from 'react-hook-form';
import BaseButton from '@components/ui/base-button/BaseButton';
import { StepOne } from './add-game-steps/StepOne';
import { StepTwo } from './add-game-steps/StepTwo';
import { StepThree } from './add-game-steps/StepThree';
import { INITIAL_STEPS_DATA, type StepsProps } from './add-game-steps/StepsProps';
import './AddGame.css';
import axios from 'axios';
import { type GameAdmin } from '../admin-games-table/AdminGamesTableProps';

const ADD_GAME_FORM_BTN_CLASSES = {
  buttonForm: 'game-form__add-btn',
  buttonTitle: 'game-form__add-btn-title',
};

interface GameType {
  id: string;
  gameTypeName: string;
  gameTypeDescription: string;
  gameTypeImage: string;
}

interface Location {
  id: string;
  coordinates: any;
  franchiseeId: any;
  address: string;
  city: string;
  cityId: string;
  locationName: string;
}

const AddGame: FC<any> = ({
  gameToEdit,
  close,
}: {
  gameToEdit: GameAdmin;
  close: () => unknown;
}) => {
  const [formStep, setFormStep] = useState<number>(1);
  const [formData, setFormData] = useState<any>();
  const [gameTypes, setGameTypes] = useState<GameType[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [locationId, setLocationId] = useState<string>();
  let copyGameToEdit = null;

  const nextStep = (): void => {
    const valueCurrent = getValues();
    setFormData({ ...formData, ...valueCurrent });
    setFormStep((current) => current + 1);
  };

  const prevStep = (): void => {
    setFormStep((current) => current - 1);
  };

  if (gameToEdit?.gameDate) {
    copyGameToEdit = { ...gameToEdit };
  }

  const { control, formState, getValues, setValue, reset } = useForm<StepsProps>({
    defaultValues: copyGameToEdit ?? INITIAL_STEPS_DATA,
  });

  const onSubmit = (): void => {
    if (!gameToEdit) {
      axios
        .post('/api/admin/game', {
          gameName: getValues('gameName'),
          gameType: getValues('gameType'),
          gameDescription: getValues('gameDescription'),
          gameTime: getValues('gameTime'),
          gameDate: getValues('gameDate'),
          gameLocationName: getValues('gameLocationName'),
          maxPlayersCount: Number(getValues('maxPlayersCount')),
          showToUsers: getValues('showToUsers'),
          cityName: getValues('cityName'),
          priceValue: Number(getValues('priceValue')),
          address: getValues('address'),
          gameLocationId: Number(locationId),
        })
        .then((res) => {
          window.location.reload();
          alert('Игра добавлена');
        })
        .catch((err: { response: { data: { message: string } } }) => {
          alert(`Ошибка: ${String(err?.response?.data?.message) ?? ''}`);
        });
    } else {
      axios
        .put(`/api/admin/game/action/${gameToEdit.id}`, {
          gameName: getValues('gameName') || gameToEdit.gameName,
          gameType: getValues('gameType') || gameToEdit.gameType,
          gameDescription: getValues('gameDescription') || gameToEdit.gameDescription,
          gameTime: getValues('gameTime') || gameToEdit.gameTime,
          gameDate: getValues('gameDate') || gameToEdit.gameDate,
          gameLocationName: getValues('gameLocationName') || gameToEdit.gameLocationName,
          maxPlayersCount: Number(getValues('maxPlayersCount')) || gameToEdit.maxPlayersCount,
          showToUsers: getValues('showToUsers'),
          cityName: getValues('cityName') || gameToEdit.cityName,
          priceValue: Number(getValues('priceValue')) || gameToEdit.priceValue,
          address: getValues('address') || gameToEdit.address,
          gameLocationId: Number(locationId) || gameToEdit.gameLocationId,
        })
        .then((res) => {
          window.location.reload();
          alert('Игра обновлена');
        })
        .catch((err: { response: { data: { message: string } } }) => {
          alert(`Ошибка: ${err?.response?.data?.message ?? ''}`);
        });
    }
  };

  const gameType = useWatch({
    control,
    name: 'gameType',
  });

  const gameLocationName = useWatch({
    control,
    name: 'gameLocationName',
  });

  useEffect(() => {
    const selectedType = gameTypes.find((typeItem) => typeItem.id === gameType);
    if (selectedType) {
      setValue('gameDescription', selectedType.gameTypeDescription);
    }
  }, [gameType]);

  useEffect(() => {
    const selectedLocation = locations.find(
      (location) => location.locationName === gameLocationName,
    );
    if (selectedLocation) {
      setValue('cityName', selectedLocation.city);
      setValue('address', selectedLocation.address);
      setLocationId(selectedLocation.id);
    }
  }, [gameLocationName]);

  useEffect(() => {
    axios
      .get('/api/admin/game/types')
      .then((res) => {
        setGameTypes(res.data as unknown as GameType[]);
      })
      .catch(() => {});

    axios
      .get('/api/admin/game/locations')
      .then((res) => {
        setLocations(res.data as unknown as Location[]);
      })
      .catch(() => {});
  }, []);

  function getStepDescription(step: number): ReactNode {
    switch (step) {
      case 1:
        return (
          <p id="dialogDesc" className="add-game__description">
            Выберите тематику игры. Добавьте название и описание: их увидят игроки в списке
            предстоящих игр.
          </p>
        );
      case 2:
        return (
          <p id="dialogDesc" className="add-game__description">
            Заполните основную информацию об игре.
          </p>
        );
      case 3:
        return (
          <p id="dialogDesc" className="add-game__description">
            Завершите добавление игры.
          </p>
        );
    }
  }

  return (
    <article
      role="dialog"
      aria-labelledby="dialogTitle"
      aria-describedby="dialogDesc"
      className="add-game"
    >
      {gameToEdit ? (
        <h2 id="dialogTitle" className="add-game__header">
          Редактировать Игру
        </h2>
      ) : (
        <h2 id="dialogTitle" className="add-game__header">
          Добавить игру
        </h2>
      )}
      <div className="add-game__steps">
        <div className="add-game__progress">
          <span>Шаг 1</span>
          <span>Шаг 2</span>
          <span>Шаг 3</span>
        </div>
        {getStepDescription(formStep)}
      </div>

      <form className="game-form">
        {formStep === 1 && <StepOne control={control} gameTypes={gameTypes} />}
        {formStep === 2 && <StepTwo control={control} locations={locations} />}
        {formStep === 3 && <StepThree formData={formData} />}

        <div className="game-form__controls">
          {formStep > 2 ? (
            <BaseButton
              title="Добавить игру"
              styles={ADD_GAME_FORM_BTN_CLASSES}
              onClick={(): void => {
                onSubmit();
              }}
            />
          ) : (
            <BaseButton
              title="Следующий шаг"
              styles={ADD_GAME_FORM_BTN_CLASSES}
              onClick={nextStep}
            />
          )}
          {formStep < 2 ? (
            <button
              type="button"
              className="game-form__cancel-btn"
              onClick={() => {
                close();
              }}
            >
              Отменить
            </button>
          ) : (
            <button type="button" className="game-form__cancel-btn" onClick={prevStep}>
              Назад
            </button>
          )}
        </div>
      </form>
    </article>
  );
};

export default AddGame;
