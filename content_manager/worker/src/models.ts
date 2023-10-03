export interface Image {
    key: string;
    size: number;
    href: string;

    metadata: {
        title: string;
        date: Date;
        caption: string;
        iso: number
        shutter_speed: number
        aperture: number
    }
}