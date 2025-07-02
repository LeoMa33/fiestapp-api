import {IsEnum, IsInt, IsString, Min} from "class-validator";
import {AlcoholConsumption, Gender} from "../../../domain/user.entity";


export class CreateUserDto {
    @IsString()
    guid: string;

    @IsString()
    username: string;

    @IsEnum(Gender)
    gender: Gender;

    @IsInt()
    @Min(0)
    age: number;

    @IsInt()
    @Min(0)
    height: number;

    @IsInt()
    @Min(0)
    weight: number;

    @IsEnum(AlcoholConsumption)
    alcoholConsumption: AlcoholConsumption;
}