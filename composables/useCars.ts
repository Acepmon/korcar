import { Car } from "@/types";

export const useCars = () => {
    return {
        carList: useFetch('/api/cars', {
            transform: (data: Car[]) => {
                return data.map((car) => {
                    return {
                        ...car,
                        image: car.image,
                        gallery: car.gallery.map((image) => {
                            return image;
                        }),
                    };
                });
            }
        }),

        carDetail: (id: string) => useFetch(`/api/cars`, {
            query: { id },
            transform: (data: Car[]) => {
                if (data.length === 0) {
                    return null;
                }
                const car = data[0];
                return {
                    ...car,
                    image: car.image,
                    gallery: car.gallery.map((image) => {
                        return image;
                    }),
                };
            }
        }),

    }
}