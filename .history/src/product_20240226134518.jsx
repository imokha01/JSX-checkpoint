
const products = [
    {
      "name": "iPhone X",
      "price": "₦320,000",
      "design": {
        "dimensions": "143.6 x 70.9 x 7.7 mm",
        "weight": "174 grams",
        "build": "Front and back glass with stainless steel frame"
      },
      "display": {
        "type": "Super Retina OLED",
        "size": "5.8 inches",
        "resolution": "1125 x 2436 pixels",
        "features": ["HDR10", "Dolby Vision", "True Tone"]
      },
      "processor": {
        "chipset": "Apple A11 Bionic",
        "cpu": "Hexa-core (2x Monsoon + 4x Mistral)",
        "gpu": "Apple GPU (three-core graphics)"
      },
      "storage_and_ram": {
        "internal_storage": ["64GB", "256GB"],
        "ram": "3GB"
      },
      "camera": {
        "main": {
          "type": "Dual",
          "wide": "12 MP, f/1.8",
          "telephoto": "12 MP, f/2.4",
          "features": ["Optical zoom in", "Optical zoom out", "2x optical zoom out"],
          "flash": "Dual-LED dual-tone"
        },
        "front": {
          "type": "Single",
          "standard": "7 MP, f/2.2",
          "features": ["Face ID facial recognition", "Animoji"]
        }
      },
      "battery": {
        "type": "Li-Ion 2716 mAh",
        "charging": "Fast charging (50% in 30 minutes)",
        "wireless_charging": "Qi wireless charging"
      },
      "operating_system": "iOS (Upgradable)",
      "features": {
        "biometric_security": "Face ID facial recognition",
        "water_resistance": "IP67",
        "audio": "Stereo speakers (No headphone jack)"
      },
      "connectivity": {
        "network": "4G LTE",
        "wireless": "Wi-Fi 802.11 a/b/g/n/ac, Bluetooth 5.0",
        "ports": "NFC, GPS, Lightning"
      },
      "sensors": [
        "Face ID",
        "Accelerometer",
        "Gyro",
        "Proximity",
        "Compass",
        "Barometer"
      "description": "A high-performance smartphone with advanced features.",
      "imageURL": 
    },
    {
      "name": "Laptop Pro",
      "price": 1299.99,
      "description": "Powerful laptop for professional use with a sleek design.",
      "imageURL": "https://example.com/laptop-pro-image.jpg"
    },
    {
      "name": "Wireless Headphones",
      "price": 99.95,
      "description": "High-quality wireless headphones with noise-canceling technology.",
      "imageURL": "https://example.com/headphones-image.jpg"
    },
    {
      "name": "Smartwatch 2000",
      "price": 199.99,
      "description": "Advanced smartwatch with fitness tracking and communication features.",
      "imageURL": "https://example.com/smartwatch-2000-image.jpg"
    },
    {
      "name": "4K Ultra HD TV",
      "price": 799.99,
      "description": "Immersive 4K Ultra HD television for an enhanced viewing experience.",
      "imageURL": "https://example.com/4k-tv-image.jpg"
    },
    {
      "name": "Gaming Console Pro",
      "price": 349.99,
      "description": "High-performance gaming console for an ultimate gaming experience.",
      "imageURL": "https://example.com/gaming-console-pro-image.jpg"
    },
    {
      "name": "Digital Camera Deluxe",
      "price": 449.95,
      "description": "Professional-grade digital camera with advanced shooting capabilities.",
      "imageURL": "https://example.com/digital-camera-deluxe-image.jpg"
    },
    {
      "name": "Portable Bluetooth Speaker",
      "price": 79.99,
      "description": "Compact and portable Bluetooth speaker with crystal-clear sound.",
      "imageURL": "https://example.com/bluetooth-speaker-image.jpg"
    },
    {
      "name": "Home Security System",
      "price": 299.99,
      "description": "Comprehensive home security system with smart monitoring features.",
      "imageURL": "https://example.com/security-system-image.jpg"
    },
    {
      "name": "Wireless Charging Pad",
      "price": 29.99,
      "description": "Convenient wireless charging pad compatible with various devices.",
      "imageURL": "https://example.com/charging-pad-image.jpg"
    }
];

export default products;
