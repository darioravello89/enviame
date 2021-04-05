interface IShippingOrder {
    shipping_order: IShippingOrder;
    shipping_origin: IShippingOrigin;
    shipping_destination: IShippingDestination;
    carrier: ICarrier;
}

interface IShippingOrder {
    n_packages: string;
    content_description: string;
    imported_id: string;
    order_price: string;
    weight: string;
    volume: string;
    type: string;
}

interface IShippingOrigin {
    warehouse_code: string;
}

interface IShippingDestination {
    customer: ICustomer;
    delivery_address: IDeliveryAddress;
}

interface ICustomer {
    name: string;
    email: string;
    phone: string;
}

interface IDeliveryAddress {
    home_address: IHomeAddress;
}

interface IHomeAddress {
    place: string;
    full_address: string;
}

interface ICarrier {
    carrier_code: string;
    tracking_number: string;
}
