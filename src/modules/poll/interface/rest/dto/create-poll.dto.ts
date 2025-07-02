import {IsString, IsArray, ArrayMinSize, IsUUID} from 'class-validator';

export class CreatePollDto {
    @IsString()
    question: string;

    @IsUUID()
    event: string;

    @IsArray()
    @ArrayMinSize(2)
    options: string[];
}
