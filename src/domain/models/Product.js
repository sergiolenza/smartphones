class Product {
  constructor({
    id,
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    resolution,
    battery,
    cameras,
    dimensions,
    weight,
  }) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.cpu = cpu;
    this.ram = ram;
    this.os = os;
    this.resolution = resolution;
    this.battery = battery;
    this.cameras = cameras;
    this.dimensions = dimensions;
    this.weight = weight;
  }
}

export default Product;
