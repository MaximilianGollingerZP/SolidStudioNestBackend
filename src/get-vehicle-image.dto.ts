import { Expose, Transform, Type } from "class-transformer";
import { IsBoolean, IsDefined, IsNotEmpty, IsString } from "class-validator";

export class GetVehicleImageHeadersDto {
  @IsDefined()
  @IsString()
  @Expose({ name: "vin" })
  public vin: string;
}
