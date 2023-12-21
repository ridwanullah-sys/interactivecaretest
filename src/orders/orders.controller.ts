import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-ninja.dto';

@Controller('orders')
export class OrdersController {
  private orders = [
    {
      user_id: 0,
      product_id: 2938,
      quantities: 10,
      payment_information: 'This is a medical product',
    },
    {
      user_id: 1,
      product_id: 1818,
      quantities: 90,
      payment_information: 'This is a pencil',
    },
  ];

  @Get()
  getOrders() {
    return this.orders;
  }

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    //Validates if the body contains user_id, products_id, quantities and payment_information
    if (!createOrderDto.user_id) {
      throw new BadRequestException(`The user_id field is required`);
    }
    if (!createOrderDto.product_id) {
      throw new BadRequestException(`The product_id field is required`);
    }
    if (!createOrderDto.quantities) {
      throw new BadRequestException(`The quantities field is required`);
    }
    if (!createOrderDto.payment_information) {
      throw new BadRequestException(
        `The payment_information field is required`,
      );
    }

    //The Number keyword converts input to numbers, if the inputs passed is not a Number. It becomes NULL;
    createOrderDto.user_id = Number(createOrderDto.user_id);
    createOrderDto.product_id = Number(createOrderDto.product_id);
    createOrderDto.quantities = Number(createOrderDto.quantities);

    //Validates if the value of user_id, product_id and quantities is coverted to null by the Number(). if it converted a to null then a valid number is not passed
    if (!createOrderDto.user_id) {
      throw new BadRequestException(`The user_id must be a number`);
    }
    if (!createOrderDto.product_id) {
      throw new BadRequestException(`The product_id must be a number`);
    }
    if (!createOrderDto.quantities) {
      throw new BadRequestException(`The quantities must be a number`);
    }

    this.orders.push(createOrderDto);
    return createOrderDto;
  }
}
