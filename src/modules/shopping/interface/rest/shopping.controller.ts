import { Controller } from '@nestjs/common';
import { Shopping } from '../../domain/shopping.entity';
import { ShoppingService } from '../../application/shopping.service';
import {BaseController} from "../../../../shared/base/base.controller";

@Controller('shoppings')
export class ShoppingController extends BaseController<Shopping> {
    constructor(private readonly shoppingService: ShoppingService) {
        super();
        this.service = shoppingService;
    }

    protected service: ShoppingService;
}
