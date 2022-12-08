import { readFileSync } from "fs";

export class VehicleImageProvider {
  getVehicleImage(vin: string): Promise<Buffer> {
    return Promise.resolve<Buffer>(
      readFileSync(`src/assets/${vin}/ANGLE_SIDE_VIEW_FORTY.png`)
    );
  }
}
