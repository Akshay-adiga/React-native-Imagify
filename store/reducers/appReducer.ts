import { CONST } from '../constants/constant';

const initState = {
    images: []
};

const app = (state = initState, action: any) => {
    switch (action.type) {
        case CONST.IMAGES_ITEMS:
            const img = action.imagesArray.map((img: any, i: number) => {
                return {
                    key: img.id,
                    description: img.description,
                    url: img.urls.regular,
                    owner: img.user.name,
                    color: img.color
                };
            })
            return { ...state, images: action.isFresh ? img : [...state.images, ...img] };
        default:
            return state;
    }
};

export default app;
