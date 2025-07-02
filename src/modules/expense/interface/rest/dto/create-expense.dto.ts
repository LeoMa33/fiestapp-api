import { IsString, IsInt, IsUUID, Min } from 'class-validator';

export class CreateExpenseDto {
    @IsString()
    label: string;

    @IsInt()
    @Min(0)
    amount_in_cent: number;

    @IsUUID()
    user: string;

    @IsUUID()
    event: string;
}
