"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const configs_1 = require("./configs/configs");
const country_router_1 = require("./routers/country.router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/", country_router_1.countryRouter);
app.listen(configs_1.config.APP_PORT || 3001, async () => {
    console.log(`Server has started on PORT ${configs_1.config.APP_PORT}`);
});
