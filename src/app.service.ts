import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { VehicleImageProvider } from "./vehicle-image.provider";

@Injectable()
export class AppService {
  constructor(private readonly vehicleImageProvider: VehicleImageProvider) {}

  getVehicleImage(vin: string): Promise<Buffer> {
    const vinList = ["VIN01", "VIN02", "VIN03", "VIN04", "VIN05"];

    if (!vinList.includes(vin)) {
      throw new HttpException(`VIN ${vin} not found`, HttpStatus.NOT_FOUND);
    }
    return this.vehicleImageProvider.getVehicleImage(vin);
  }

  getVehicleData(vin: string): Object {
    const vinList = ["VIN01", "VIN02", "VIN03", "VIN04", "VIN05"];

    if (!vinList.includes(vin)) {
      throw new HttpException(`VIN ${vin} not found`, HttpStatus.NOT_FOUND);
    }

    const vinMap = new Map<string, Object>([
      [
        "VIN01",
        {
          vin: "VIN01",
          model: "Model1",
          driveTrain: "ELECTRIC",
        },
      ],
      [
        "VIN02",
        {
          vin: "VIN02",
          model: "Model2",
          driveTrain: "HYBRID",
        },
      ],
      [
        "VIN03",
        {
          vin: "VIN03",
          model: "Model3",
          driveTrain: "PLUGIN_HYBRID",
        },
      ],
      [
        "VIN04",
        {
          vin: "VIN04",
          model: "Model4",
          driveTrain: "COMBUSTION",
        },
      ],
      [
        "VIN05",
        {
          vin: "VIN05",
          model: "Model5",
          driveTrain: "COMBUSTION",
        },
      ],
    ]);

    const test = vinMap.get(vin);

    return vinMap.get(vin);
  }
}
