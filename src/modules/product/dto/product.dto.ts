import { ProductUnit } from '@/types/enums/product-unit-type.enum';
import { Exclude, Expose, Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

@Exclude()
export class ProductBaseDto {
  @Expose()
  readonly id: string;

  @Expose()
  readonly name: string;

  @Expose()
  readonly price: number;

  @Expose()
  readonly quantity: number;

  @Expose()
  @IsOptional()
  readonly details?: string;

  @Expose()
  @IsEnum(ProductUnit)
  readonly unit: ProductUnit;

  @Expose()
  readonly purchaseDate: Date;

  @Expose()
  readonly createdAt: Date;

  @Expose()
  readonly updatedAt: Date;
}

export class ProductCreateDto {
  @MinLength(4)
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsString()
  details?: string;

  @IsNotEmpty()
  @IsEnum(ProductUnit)
  unit: ProductUnit;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  purchaseDate: Date;
}

export class ProductUpdateDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsString()
  details?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEnum(ProductUnit)
  unit?: ProductUnit;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  purchaseDate?: Date;
}

export class ProductFindAllDto extends ProductBaseDto {
  @Expose()
  readonly stockMovements: any[];
}

export class ProductFindOneDto extends ProductBaseDto {
  @Expose()
  readonly stockMovements: any[];
}

export class IncrementProductStockDto {
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @IsNotEmpty()
  @IsNumber()
  readonly quantity: number;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  readonly purchaseDate: Date;
}
