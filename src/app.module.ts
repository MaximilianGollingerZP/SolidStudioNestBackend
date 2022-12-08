import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { VehicleImageProvider } from "./vehicle-image.provider";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, VehicleImageProvider],
})
export class AppModule {}
