export interface TeamBidDataType {
        gamesData?: TeamBidDataType[]
        applicationId: number;
        gameId: number;
        playersCount: number;
        contactPlayerName: string;
        contactPlayerPhone: string;
        status: string;
        teamName?: string;
}
