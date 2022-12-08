import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiHeader } from "@nestjs/swagger";
import { RequestHeaders } from "./request-headers.decorator";
import { GetVehicleImageHeadersDto as VehicleRequestDto } from "./get-vehicle-image.dto";
import { response } from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("vehicle-image")
  @ApiHeader({
    name: "vin",
    description: "Requests small version of image",
    required: true,
  })
  async getVehicleImage(
    @RequestHeaders() headers: VehicleRequestDto,
    @Res() response
  ): Promise<void> {
    let result: Buffer;
    result = await this.appService.getVehicleImage(headers.vin);

    response
      .header("content-type", "image/png")
      .status(HttpStatus.OK)
      .send(result);
  }

  @Get("vehicle-data")
  @ApiHeader({
    name: "vin",
    description: "Requests small version of image",
    required: true,
  })
  getVehicleData(@RequestHeaders() headers: VehicleRequestDto): Object {
    return this.appService.getVehicleData(headers.vin);
  }
}
