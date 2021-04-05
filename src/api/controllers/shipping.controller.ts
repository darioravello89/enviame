import { ShippingOrder } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import Container from "typedi";
import { Logger } from "winston";
import ShippingOrderService from "../../services/shipping.service";

export async function saveShipping(req: Request, res: Response, next: NextFunction) {
    const logger: Logger = Container.get('logger');
    try {
        logger.silly('Calling /shippingOrders endpoint with body: %o', req.body);
        const shippingOrderServiceInstance: ShippingOrderService = Container.get(ShippingOrderService);
        const shippingOrder: ShippingOrder = await shippingOrderServiceInstance.CreateShippingOrder(req.body as IShippingOrder);
        return res.status(201).json(shippingOrder);
    } catch (e) {
        logger.error('❌ error: %o', e);
        return next(e);
    }
}
