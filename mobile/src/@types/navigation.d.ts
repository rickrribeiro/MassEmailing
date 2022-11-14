export interface CityParams {
    id: string;
    title: string;
    bannerUrl: string;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            city: CityParams;
        }
    }
}