import {v4 as uuidv4} from 'uuid';

export class Media {
	id: string;

	constructor(private file: File) {
		this.id = uuidv4();
	}
}
