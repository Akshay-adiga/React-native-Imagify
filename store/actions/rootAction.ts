import { CONST, endPoints } from '../constants/constant';
import http from '../../http/http';
/**get images with a key value
 * @param name keyword with which you can search images
 * @param page pagination, to set page number(optional)
 * @param isFresh to identify whether the request is a fresh search or not(optional)
 */
export const getData = (name: string, page: number = 1, isFresh: boolean = true) => {
    return async (dispatch: any) => {
        try {
            const res: any = await http.get(`${endPoints.GET_PHOTOS.uri}?query=${name}&page=${page}&per_page=20&client_id=quQcMQxaFCY0fikF5wSmkYRUhFzOwQnfZaoECGRLo7c`);
            dispatch({ type: CONST.IMAGES_ITEMS, imagesArray: res.data.results, isFresh });
        } catch (error) {
           throw new Error(error.message)
        }
    }
};
