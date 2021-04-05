import 'reflect-metadata';
import Container, { Service, Inject } from 'typedi';
import { ShippingOrder, PrismaClient } from '@prisma/client';
import { Logger } from 'winston';
import { TEMPORARY_USER_DEFAULT } from '../utils/constants';

@Service()
export default class ShippingService {
    // TODO: Fix DI Inject
    constructor(
        @Inject('logger') private logger: Logger,
        @Inject('prisma') private prisma: PrismaClient) {}

    public async CreateShippingOrder(shippingInput: IShippingOrder): Promise<ShippingOrder> {
        try {
            const prisma: PrismaClient = Container.get('prisma');
            const logger: Logger = Container.get('logger');

            logger.silly('Creating Shipping db record');
            // TODO: Get user from token JWT
            // TODO: Check model structure database and nomenclature
            const shippingOrderRecord: ShippingOrder = await prisma.shippingOrder.create({
                data: {
                    ID_ShippingOrder: undefined,
                    n_packages: shippingInput.shipping_order.n_packages,
                    content_description: shippingInput.shipping_order.content_description,
                    imported_id: shippingInput.shipping_order.imported_id,
                    order_price: shippingInput.shipping_order.order_price,
                    weight: shippingInput.shipping_order.weight,
                    volume: shippingInput.shipping_order.volume,
                    type: shippingInput.shipping_order.type,
                    ID_CustomerDestination: 1, // TODO: Check customer ID
                    ID_AddressCustomer: 1, // TODO: Check Address ID
                    ID_ShippingOrigin: 1, // TODO: Check Shipping Origin ID
                    ID_Carrier: 1, // TODO: Check Carrier ID
                    Carrier_TrakingNumber: shippingInput.carrier.tracking_number,

                    Deleted: false,
                    Insert_Date: new Date(),
                    Insert_User: TEMPORARY_USER_DEFAULT,
                    Update_Date: undefined,
                    Update_User: undefined
                }
            });

            if (!shippingOrderRecord) {
                throw new Error('Shipping cannot be created');
            }

            logger.silly(`Created Shipping db record with ID: ${shippingOrderRecord.ID_ShippingOrder}`);
            return shippingOrderRecord;
        } catch (e) {
            throw new Error('Shipping cannot be created');
        }
    }
}