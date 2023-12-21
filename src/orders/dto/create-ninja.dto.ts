export class CreateOrderDto {
  user_id: number;
  product_id: number;
  quantities: number;
  payment_information: string;
}
