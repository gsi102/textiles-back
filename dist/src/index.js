"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// prod
// const port = process.env.PORT || 8080;
const port = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// ENDPOINTS
app.get("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productsFile = path_1.default.join(__dirname, "./data/products.json");
    res
        .status(200)
        .header("Content-Type", "application/json")
        .sendFile(productsFile);
}));
app.get("/products/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productID = req.params.id;
    const productFile = path_1.default.join(__dirname, `./data/product_${productID}.json`);
    res
        .status(200)
        .header("Content-Type", "application/json")
        .sendFile(productFile);
}));
app.get("/*", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.sendStatus(400);
}));
//------------------------------
app.listen(port, () => {
    console.log(`Port: ${port}`);
});
