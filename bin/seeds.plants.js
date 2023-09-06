// Require Mongoose
const mongoose = require('mongoose');

// Require Plants Model
const Plants = require('../models/Plants.model.js');

const MONGO_URI =
  'mongodb+srv://ritasaraiva:mrTW4Dz5cYpvcht2@cluster0.pwhb7jd.mongodb.net/?retryWrites=true&w=majority';

const allPlants = [
  {
    name: 'Calathea Orbifolia',
    description: `This South American Amazon beauty has broad leaves that are green and silver striped. The Calathea Orbifolia is a living plant. She will assume different positions during the day; in the morning her leaves will open and in the evening they will close again.`,
    image: '/images/calathea-orbifolia.jpg',
    care: {
      light:
        "Avoid direct sunlight, as it can scorch the leaves. It's best suited for areas with filtered or dappled sunlight. ",
      watering:
        'Keep the soil consistently moist but not waterlogged. Water when the top inch of soil feels dry. Ensure that the pot has good drainage to prevent root rot. /n ',
      soil: 'Plant Calathea orbifolia in a well-draining, peat-based potting mix. The mix should retain moisture but also provide good aeration for the roots. /n ',
      seasonalCare:
        "Humidity: Maintain higher humidity levels around the plant, especially during the dry winter months. Use a humidifier or place the pot on a humidity tray. /n Pruning: Remove any brown or damaged leaves to encourage healthy growth and maintain the plant's appearance. /n Cleaning: Wipe the leaves regularly with a damp cloth to remove dust and keep the foliage looking vibrant. /n WinterCare: Reduce watering and avoid fertilizing during the winter when the plant is in a semi-dormant state. /n ",
      fertilizing:
        'Feed every 4-6 weeks during spring and summer with a balanced, water-soluble fertilizer diluted to half strength',
    },
    tips: `Temperature Sensitivity: Protect the plant from temperature fluctuations and drafts, which can cause stress and leaf damage.
    Grouping: Grouping it with other plants can help create a microclimate with higher humidity levels.
    Rotation: Rotate the plant periodically to ensure even growth and prevent it from leaning toward the light source.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Repotting: Repot the plant when it becomes root-bound, typically every 2-3 years in the spring. Choose a slightly larger pot as needed.`,
    category: 'Pet Friendly',
  },
  {
    name: 'Calathea Medallion',
    description:
      'Is a captivating tropical houseplant known for its ornate foliage. The leaves are round, broad, and feature intricate patterns of green, dark green, and various shades of pink or burgundy. The markings on the leaves resemble medallions, which is how it gets its common name.',
    image: '/images/calathea-medallion.png',
    care: {
      light:
        "Avoid direct sunlight, as it can scorch the leaves and cause them to lose their vibrant coloration. It's best suited for areas with filtered or dappled sunlight. Low light conditions may lead to reduced growth and less vibrant foliage /n ",
      watering:
        'Keep the soil consistently moist but not waterlogged. Water when the top inch of soil feels dry. Ensure that the pot has good drainage to prevent root rot. Consider using a humidity tray or misting the leaves regularly./n ',
      soil: 'Plant it in a well-draining, peat-based potting mix. The mix should retain moisture but also provide good aeration for the roots. /n ',
      seasonalCare:
        "Humidity: Maintain higher humidity levels around the plant, especially during the dry winter months. Use a humidifier or place the pot on a humidity tray. /n Pruning: Remove any brown or damaged leaves to encourage healthy growth and maintain the plant's appearance. /n Cleaning: Wipe the leaves regularly with a damp cloth to remove dust and keep the foliage looking vibrant. /n Winter Care: Reduce watering and avoid fertilizing during the winter when the plant is in a semi-dormant state. /n ",
      fertilizing:
        'Feed every 4-6 weeks during spring and summer with a balanced, water-soluble fertilizer diluted to half strength. Avoid fertilizing during the winter months.',
    },
    tips: 'Temperature Sensitivity: Protect the plant from temperature fluctuations and drafts, which can cause stress and leaf damage. /n Grouping: Grouping it with other plants can help create a microclimate with higher humidity levels. /n Rotation: Rotate the plant periodically to ensure even growth and prevent it from leaning toward the light source.  /n Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations. /n Repotting: Repot the plant when it becomes root-bound, typically every 2-3 years in the spring. Choose a slightly larger pot as needed. /n ',
    category: 'Pet Friendly',
  },
  {
    name: 'Calathea Makoyana',
    description: `Commonly known as the "Peacock Plant" is a stunning tropical houseplant appreciated for its intricately patterned foliage. Its leaves feature a beautiful combination of green, cream, and purple hues, with a pattern that resembles peacock feathers, giving it its common name.`,
    image: '/images/calathea-makoyana.png',
    care: {
      light: `Avoid direct sunlight, as it can scorch the leaves. This plant is particularly well-suited for areas with filtered or dappled sunlight.`,
      watering: `Keep the soil consistently moist but not soggy. Water when the top inch of soil feels dry. Ensure that the pot has good drainage to prevent root rot. Maintain higher humidity levels around the plant to mimic its tropical habitat.`,
      soil: `Plant it in a well-draining, peat-based potting mix. The mix should retain moisture but also provide good aeration for the roots.`,
      seasonalCare: `Humidity: Maintain higher humidity levels around the plant, especially during the dry winter months. You can achieve this by misting the leaves, using a humidity tray, or placing a humidifier nearby.
      Pruning: Remove any brown or damaged leaves to encourage healthy growth.
      Cleaning: Wipe the leaves regularly with a damp cloth to remove dust and keep the foliage looking vibrant.
      Winter Care: Reduce watering during the winter when growth slows.`,
      fertilizing: `Feed every 4-6 weeks during spring and summer with a balanced, water-soluble fertilizer diluted to half strength. Avoid fertilizing during the winter months when the plant is in a semi-dormant state.`,
    },
    tips: `Protect from Drafts: Avoid placing the plant near heaters, air conditioners, or drafty windows, as Calathea makoyana is sensitive to temperature fluctuations.
    Grouping: Grouping it with other plants can help create a microclimate with higher humidity levels.
    Rotate: Rotate the plant periodically to ensure even growth and prevent it from leaning toward the light source.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Repotting: Repot the plant when it becomes root-bound, typically every 2-3 years in the spring. Choose a slightly larger pot as needed.`,
    category: 'Pet Friendly',
  },
  {
    name: 'Calathea Triostar',
    description: `Also known as the "Triostar Stromanthe", is a captivating tropical houseplant cherished for its striking foliage. Its leaves are lance-shaped with vibrant shades of pink, cream, and green, creating a stunning tricolor effect. The undersides of the leaves are typically a deep maroon or burgundy color.`,
    image: '/images/calathea-triostar.jpg',
    care: {
      light: `It can tolerate some filtered sunlight but should be protected from direct sun exposure, which can scorch its leaves. This plant is best suited for areas with ample natural light but not harsh, direct sunlight.`,
      watering: `Keep the soil consistently moist but not waterlogged. Water when the top inch of soil feels slightly dry. Ensure that the pot has good drainage to prevent root rot. Maintaining higher humidity levels is essential for this plant's health, so consider misting the leaves regularly.`,
      soil: `Plant it in a well-draining, peat-based potting mix. The mix should retain moisture but also provide good aeration for the roots.`,
      seasonalCare: `Humidity: Maintain higher humidity levels around the plant, especially during the dry winter months. Use a humidifier or place the pot on a humidity tray.
      Pruning: Remove any brown or damaged leaves to encourage healthy growth and maintain the plant's appearance.
      Cleaning: Wipe the leaves regularly with a damp cloth to remove dust and keep the foliage looking vibrant.
      Winter Care: Reduce watering and avoid fertilizing during the winter when the plant is in a semi-dormant state.`,
      fertilizing: `Feed every 4-6 weeks during spring and summer with a balanced, water-soluble fertilizer diluted to half strength. Avoid fertilizing during the winter months.`,
    },
    tips: `Temperature Sensitivity: Protect the plant from temperature fluctuations and drafts, which can cause stress and leaf damage.
    Grouping: Grouping it with other plants can help create a microclimate with higher humidity levels.
    Rotation: Rotate the plant periodically to ensure even growth and prevent it from leaning toward the light source.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Repotting: Repot the plant when it becomes root-bound, typically every 2-3 years in the spring. Choose a slightly larger pot as needed.`,
    category: 'Pet Friendly',
  },
  {
    name: 'Calathea Zebrina',
    description: `Often referred to as the "Zebra Plant" is a distinctive and visually striking houseplant known for its bold, zebra-like patterns on its leaves. The leaves are elongated and have a deep green color with contrasting light green stripes or markings. The undersides of the leaves are often maroon, adding to its overall appeal. This plant belongs to the Marantaceae family, which includes various species with captivating foliage.`,
    image: '/images/calathea-zebrina.png',
    care: {
      light: `It thrives in filtered sunlight or moderate shade. Avoid exposing it to direct sunlight, as this can scorch the leaves. Inadequate light can lead to less vibrant leaf patterns and slower growth.`,
      watering: `Keep the soil consistently moist but not waterlogged. Water when the top inch of soil feels slightly dry. Use room-temperature water and ensure proper drainage to prevent root rot. Maintaining higher humidity levels around the plant, misting the leaves.`,
      soil: `Plant it in a well-draining, peat-based potting mix. A mix formulated for tropical plants or African violets is suitable. Good soil aeration is essential.`,
      seasonalCare: `Humidity: Maintain higher humidity levels around the plant, especially during the dry winter months. Increased humidity helps prevent leaf browning and curling.
      Pruning: Prune to remove any yellowing or damaged leaves and to encourage bushier growth.
      Cleaning: Wipe the leaves regularly with a damp cloth to remove dust and maintain their vibrant appearance.
      Winter Care: Reduce watering and avoid fertilizing during the winter when the plant's growth naturally slows.`,
      fertilizing: `Feed every 4-6 weeks during spring and summer with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization during the winter months.`,
    },
    tips: `Humidity: Consistently high humidity is important for this plant's well-being. Ensure proper humidity levels to prevent leaf browning and curling.
    Rotation: Rotate the plant periodically to ensure even growth and prevent it from leaning toward the light source.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Repotting: Repot the plant when it becomes root-bound or outgrows its container, typically every 2-3 years. Choose a slightly larger pot as needed.`,
    category: 'Calathea',
  },
  {
    name: 'Calathea Sanderiana',
    description: `Is a striking and elegant houseplant known for its eye-catching foliage. It belongs to the Marantaceae family and features lance-shaped leaves with a beautiful combination of dark green and silver-green stripes. The undersides of the leaves are often maroon, adding to its aesthetic appeal. When in low light or at night, the leaves fold upward, revealing the maroon undersides, and then unfurl again during the day.`,
    image: '/images/calathea-sanderiana.png',
    care: {
      light: `It prefers filtered sunlight or moderate shade. Avoid exposing it to direct sunlight, as this can scorch the leaves. Inadequate light can result in faded leaf colors and slower growth.`,
      watering: `Keep the soil consistently moist but not waterlogged. Water when the top inch of soil feels slightly dry. Use room-temperature water and ensure that the pot has proper drainage to prevent root rot. Appreciates higher humidity levels, so consider misting the leaves.`,
      soil: `Plant in a well-draining, peat-based potting mix. A mix formulated for tropical plants or African violets is suitable. Good soil aeration is important for root health.`,
      seasonalCare: `Humidity: Maintain higher humidity levels around the plant, especially during the dry winter months. Increased humidity helps prevent leaf browning and curling.
      Pruning: Prune to remove any yellowing or damaged leaves and to encourage bushier growth.
      Cleaning: Wipe the leaves regularly with a damp cloth to remove dust and maintain their vibrant appearance.
      Winter Care: Reduce watering and avoid fertilizing during the winter when the plant's growth naturally slows.`,
      fertilizing: `Feed every 4-6 weeks during spring and summer with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization during the winter months.`,
    },
    tips: `Humidity: Consistently high humidity is important for this plant's well-being. Ensure proper humidity levels to prevent leaf browning and curling.
    Rotation: Rotate the plant periodically to ensure even growth and prevent it from leaning toward the light source.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Repotting: Repot the plant when it becomes root-bound or outgrows its container, typically every 2-3 years. Choose a slightly larger pot as needed.`,
    category: 'Calathea',
  },
  {
    name: 'Calathea Rufibarba',
    description: `Commonly known as the "Velvet Calathea" is a striking tropical houseplant recognized for its unique and attractive features. It has elongated, lance-shaped leaves with a rich, velvety texture on the upper side and a deep purple hue on the underside. The plant's fuzzy appearance and rich coloration make it a popular choice among indoor plant enthusiasts.`,
    image: '/images/calathea-rufibarba.png',
    care: {
      light: `It prefers filtered or dappled sunlight. Protect it from direct sunlight, as intense sun can scorch the leaves. Inadequate light can result in less vibrant foliage and slower growth.`,
      watering: `Keep the soil consistently moist but not waterlogged. Water when the top inch of soil feels slightly dry. Ensure that the pot has good drainage to prevent root rot. Maintaining higher humidity levels around the plant is important for its overall health.`,
      soil: `Plant it in a well-draining, peat-based potting mix. The mix should retain moisture but also provide good aeration for the roots.`,
      seasonalCare: `Humidity: Maintain higher humidity levels around the plant, especially during the dry winter months. Use a humidifier, humidity tray, or mist the leaves regularly to achieve this.
      Pruning: Prune to remove any brown or damaged leaves and to encourage healthy growth.
      Cleaning: Wipe the leaves with a damp cloth to remove dust and maintain their velvety appearance.
      Winter Care: Reduce watering and avoid fertilizing during the winter when the plant is in a semi-dormant state.`,
      fertilizing: `Feed every 4-6 weeks during spring and summer with a balanced, water-soluble fertilizer diluted to half strength. Reduce or cease fertilization during the winter months when growth is slower.`,
    },
    tips: `Temperature Sensitivity: Protect the plant from temperature fluctuations and drafts, which can cause stress and leaf damage.
    Grouping: Grouping it with other plants can help create a microclimate with higher humidity levels.
    Rotation: Rotate the plant periodically to ensure even growth and prevent it from leaning toward the light source.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Repotting: Repot the plant when it becomes root-bound, typically every 2-3 years in the spring. Choose a slightly larger pot as needed.`,
    category: 'Calathea',
  },
  {
    name: 'Calathea White Fusion',
    description: `Is a striking and highly sought-after tropical houseplant known for its exquisite foliage. It features broad, lance-shaped leaves with a mesmerizing combination of green, cream, and various shades of pink or purple. The unique variegation on its leaves resembles brush strokes, giving it an artistic and captivating appearance.`,
    image: '/images/calathea-white-fusion.png',
    care: {
      light: `It appreciates ample natural light but should be protected from direct sunlight, which can harm the delicate leaves. Inadequate light can lead to less vibrant variegation.`,
      watering: `Keep the soil consistently moist but not waterlogged. Water when the top inch of soil feels slightly dry. Ensure that the pot has good drainage to prevent root rot. Maintaining higher humidity levels is crucial for this plant's health, so consider using a humidity tray, misting the leaves regularly, or using a room humidifier.`,
      soil: `Plant it in a well-draining, peat-based potting mix. The mix should retain moisture but also provide good aeration for the roots.`,
      seasonalCare: `Humidity: Maintain higher humidity levels around the plant, especially during the dry winter months. Increased humidity helps prevent leaf browning and curling.
      Pruning: Prune to remove any brown or damaged leaves and to encourage healthy growth.
      Cleaning: Wipe the leaves regularly with a damp cloth to remove dust and maintain their vibrant appearance.
      Winter Care: Reduce watering and avoid fertilizing during the winter when the plant is in a semi-dormant state.`,
      fertilizing: `Feed every 4-6 weeks during spring and summer with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization during the winter months when growth is slower.`,
    },
    tips: `Humidity: Ensure a humid environment, as this plant thrives in higher humidity levels. You can use a humidity tray, room humidifier, or mist the leaves regularly.
    Temperature Sensitivity: Protect the plant from temperature fluctuations and drafts.
    Grouping: Grouping it with other plants can help create a microclimate with higher humidity levels.
    Rotation: Rotate the plant periodically to ensure even growth and prevent it from leaning toward the light source.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Repotting: Repot the plant when it becomes root-bound, typically every 2-3 years in the spring. Choose a slightly larger pot as needed.`,
    category: 'Calathea',
  },
  {
    name: 'Calathea Oppenheimiana',
    description: `Is a striking and ornamental houseplant known for its lush foliage. It belongs to the Marantaceae family. The plant features large, oval-shaped leaves with prominent dark green veins on a lighter green background. The undersides of the leaves are often reddish-purple, adding to its visual appeal. Is renowned for its unique and intricate leaf patterns, making it a popular choice among plant enthusiasts.`,
    image: '/images/calathea-oppenheimiana.png',
    care: {
      light: `It thrives in well-lit areas with filtered sunlight. Avoid exposing it to direct sun, as this can scorch the leaves. Inadequate light may result in less vibrant foliage and slower growth.`,
      watering: `Keep the soil consistently moist but not soggy. Water the plant when the top inch or so of the soil feels slightly dry. Use room-temperature water to avoid shocking the plant. Ensure that the pot has proper drainage to prevent waterlogged roots.`,
      soil: `Plant in a well-draining potting mix specifically formulated for tropical houseplants. A mix that retains some moisture while allowing excess water to drain is suitable.`,
      seasonalCare: `Humidity: Appreciates higher humidity levels. You can increase humidity by misting the plant, using a humidity tray, or placing a humidifier nearby.
      Cleaning: Wipe the leaves regularly with a damp cloth to remove dust and maintain their glossy appearance.`,
      fertilizing: `Feed every 4-6 weeks during spring and summer with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization in the winter when growth is slower.`,
    },
    tips: `Avoid Overwatering: While it prefers consistently moist soil, be cautious not to overwater, as this can lead to root rot. Ensure the pot has proper drainage.
    Keep Away from Drafts: Protect the plant from drafts and sudden temperature changes, as this can cause stress and leaf damage.
    Prayer Plant Behavior: is sometimes referred to as a "prayer plant" due to its habit of folding its leaves upward at night. This is a natural behavior and not a cause for concern.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.`,
    category: 'Calathea',
  },
  {
    name: 'Calathea Insigne',
    description: `Also known as the "Rattlesnake Plant," is a stunning and popular tropical houseplant admired for its striking foliage. It features lance-shaped leaves with a dark green background adorned with beautiful, wavy, and light green patterns that resemble the skin of a rattlesnake. The contrasting colors and intricate markings make it a visually appealing addition to indoor spaces.`,
    image: '/images/calathea-insigne.png',
    care: {
      light: `It thrives in filtered sunlight or moderate shade. Avoid direct sunlight, as it can scorch the leaves. Inadequate light can result in faded leaf patterns and slower growth.`,
      watering: `Keep the soil consistently moist but not waterlogged. Water when the top inch of soil feels slightly dry. Use room-temperature water and avoid allowing the plant to sit in standing water, which can lead to root rot. Maintaining higher humidity levels is crucial for this plant's health, so consider misting the leaves regularly.`,
      soil: `Plant it in a well-draining, peat-based potting mix. The mix should retain moisture but also provide good aeration for the roots.`,
      seasonalCare: `Humidity: Maintain higher humidity levels around the plant, especially during the dry winter months. Increased humidity helps prevent leaf browning and curling.
      Pruning: Prune to remove any brown or damaged leaves and to encourage healthy growth.
      Cleaning: Wipe the leaves regularly with a damp cloth to remove dust and maintain their vibrant appearance.
      Winter Care: Reduce watering and avoid fertilizing during the winter when the plant is in a semi-dormant state.`,
      fertilizing: `Feed every 4-6 weeks during spring and summer with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization during the winter months when growth is slower.`,
    },
    tips: `Humidity: Ensure a humid environment, as this plant thrives in higher humidity levels. You can use a humidity tray, room humidifier, or mist the leaves regularly.
    Temperature Sensitivity: Protect the plant from temperature fluctuations and drafts.
    Grouping: Grouping it with other plants can help create a microclimate with higher humidity levels.
    Rotation: Rotate the plant periodically to ensure even growth and prevent it from leaning toward the light source.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Repotting: Repot the plant when it becomes root-bound, typically every 2-3 years in the spring. Choose a slightly larger pot as needed.`,
    category: 'Calathea',
  },
  {
    name: 'Aspidistra Elatior',
    description: `Aspidistra elatior, commonly known as the Cast Iron Plant, is a hardy and low-maintenance indoor plant. It's characterized by its dark green, leathery leaves that grow upright from a central base. This plant is often used as a decorative element in homes and offices due to its ability to tolerate low-light conditions.`,
    image: '/images/aspidistra-elatior.png',
    care: {
      light: `Aspidistra elatior is exceptionally tolerant of low light conditions. It can thrive in dimly lit rooms or areas with filtered, indirect light. It's an excellent choice for rooms with little natural sunlight.`,
      watering: `Keep the soil evenly moist but not waterlogged. Water thoroughly when the top inch of soil feels dry. During the winter months when growth slows, reduce watering frequency. It's important not to let the plant sit in standing water, as it can lead to root rot.`,
      temperature: `Aspidistra elatior prefers consistent indoor temperatures between 50-75°F (10-24°C). Avoid exposing it to extreme temperature fluctuations and drafts.`,
      soil: `Use a well-draining, peat-based potting mix with good aeration. A slightly acidic to neutral pH is ideal for this plant.`,
      seasonalCare: `Cleaning: Wipe the leaves with a damp cloth to remove dust and keep them looking healthy.
      Repotting: Repot your Aspidistra elatior every 2-3 years or when the plant becomes root-bound. Spring is the best time for repotting.
      Trimming: Trim off any damaged or yellowing leaves at their base to encourage new growth.
      Winter Care: Reduce watering during the winter months when the plant is in a semi-dormant state.`,
      fertilizing: `Fertilize your Aspidistra elatior sparingly, approximately every 2-3 months during the growing season (spring and summer) with a balanced, water-soluble fertilizer diluted to half strength. Avoid over-fertilizing, as this plant doesn't require heavy feeding.`,
    },
    tips: `Low Light Tolerance: This plant is ideal for low-light areas where other plants may struggle.
    Minimal Pruning: Aspidistra elatior doesn't require frequent pruning. Simply remove dead or unsightly leaves.
    Pest Resistance: It's generally resistant to pests, making it a low-maintenance choice.
    Sturdy Container: Ensure that the pot or container has good drainage to prevent waterlogged soil.
    Patience: Aspidistra elatior is a slow grower, so be patient and don't expect rapid growth or frequent propagation.`,
    category: 'Pet Friendly',
  },
  {
    name: `Epipremnum Aureum - Manjula`,
    description: `Also known as "Manjula Pothos" is a popular and visually stunning cultivar of the common Pothos plant. It is characterized by its striking variegated foliage, featuring heart-shaped leaves with shades of green, creamy-white, and silver-gray. The variegation varies from leaf to leaf, creating a unique and eye-catching appearance.`,
    image: '/images/manjula.png',
    care: {
      light: `It can tolerate lower light conditions but may grow more slowly and display less vibrant variegation. Avoid direct sunlight, as it can scorch the leaves.`,
      watering: `Allow the top inch or so of the soil to dry out before watering. Water thoroughly when needed, and let excess water drain from the pot. Pothos are relatively forgiving if you occasionally forget to water, but they prefer consistently moist soil.`,
      soil: `Plant it in well-draining potting mix. A mix formulated for houseplants or a general-purpose potting mix is suitable. Good soil aeration is important for root health.`,
      seasonalCare: `Pruning: Prune as needed to maintain the desired shape and size. Trimming also encourages bushier growth.
      Cleaning: Wipe the leaves regularly with a damp cloth to remove dust and maintain their vibrant appearance.
      Winter Care: Reduce watering and avoid fertilizing during the winter when the plant's growth naturally slows.`,
      fertilizing: `Feed every 4-6 weeks during spring and summer with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization during the winter months when growth is slower.`,
    },
    tips: `Support: Provide a trellis, moss pole, or other support for the vines to climb. Manjula Pothos can grow quite long if not trained.
    Propagation: Propagate by stem cuttings in water or soil if you want to create new plants.
    Humidity: While they can adapt to lower humidity levels, Pothos appreciate moderate to high humidity. A humidity tray or regular misting can be beneficial.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Repotting: Repot when the plant becomes root-bound, typically every 2-3 years. Choose a slightly larger pot as needed.`,
    category: 'Purifying',
  },
  {
    name: `Dracaena Marginata 'Sunray'`,
    description: `Also known as the "Sunray Madagascar Dragon Tree," is a visually striking and popular indoor plant. It is a cultivar of the Dracaena marginata species. This plant is recognized for its slender, upright stems with clusters of arching, sword-shaped leaves. The leaves have a vibrant and distinctive coloration, featuring green centers with bright yellow to creamy margins, hence the name "Sunray."`,
    image: '/images/dracaena-sunray.png',
    care: {
      light:
        'It can tolerate some direct sunlight, but prolonged exposure to harsh sun can scorch the leaves. Inadequate light can lead to leggy growth and faded leaf color. This plant can also adapt to lower light conditions, although its growth may slow.',
      watering:
        'Allow the top inch or so of the soil to dry out between waterings. Water thoroughly when needed, and ensure proper drainage to prevent waterlogged roots.',
      soil: 'Plant in well-draining potting mix. A mix formulated for houseplants or a combination of peat, perlite, and a small amount of sand works well. Good soil aeration is essential.',
      seasonalCare: `Pruning: Prune to remove any dead or yellowing leaves and to shape the plant if necessary.
      Cleaning: Wipe the leaves occasionally with a damp cloth to remove dust and maintain their vibrant appearance.
      Winter Care: Reduce watering and avoid fertilizing during the winter when growth naturally slows.`,
      fertilizing: `Feed every 4-6 weeks during spring and summer with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization during the winter months when growth is slower.`,
    },
    tips: `Support: If the plant becomes top-heavy or leans, provide a stake or support to keep it upright.
    Propagation: Propagation from stem cuttings in soil is possible if you want to create new plants.
    Humidity: While it can adapt to average indoor humidity levels, higher humidity levels can benefit the plant's overall health.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Repotting: Repot when the plant becomes root-bound or outgrows its container. Typically, this is needed every 2-3 years.`,
    category: 'Purifying',
  },
  {
    name: `Epipremnum aureum - "Pothos"`,
    description: `Pothos is a popular and versatile houseplant known for its heart-shaped, glossy leaves that come in various shades of green. It belongs to the Araceae family. The plant typically features trailing vines that can grow quite long, making it an excellent choice for hanging baskets or allowing it to cascade from shelves or containers. Pothos is loved for its ease of care and air-purifying qualities.`,
    image: '/images/epipremnum-aureum.jpg',
    care: {
      light: `Pothos is adaptable to different light conditions but thrives in moderate, indirect light. It can tolerate lower light but may grow more slowly and have less variegation in such settings. Avoid exposing it to direct sunlight, as this can scorch the leaves.`,
      watering: `Allow the top inch or so of the soil to dry out between waterings. Water thoroughly when the soil feels dry to the touch, and ensure that excess water drains away, avoiding waterlogged.`,
      soil: `Plant in a well-draining potting mix designed for indoor plants. A standard indoor potting mix with good drainage works well.`,
      seasonalCare: `Pruning: Trim or prune the plant as needed to control its growth and to maintain the desired shape. Trimming can also encourage bushier growth.
      Cleaning: Wipe the leaves occasionally with a damp cloth to remove dust and maintain their glossy appearance.`,
      fertilizing: `Feed every 4-6 weeks during spring and summer with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization during the winter when growth is slower.`,
    },
    tips: `Support: Provide support, such as a trellis or moss pole, if you want your Pothos to climb or grow upright.
    Propagation: Pothos is easy to propagate from stem cuttings. Simply cut a healthy stem section and root it in water or directly in soil.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Indoor vs. Outdoor: Pothos is primarily an indoor plant but can be grown outdoors in mild climates.
    Pothos is a fantastic choice for both beginner and experienced plant enthusiasts due to its resilience and adaptability. With proper care, it will thrive indoors and enhance the beauty of your living space.`,
    category: 'Easy-to-Care',
  },
  {
    name: `Alocasia Polly`,
    description: `Also known as African Mask Plant or Elephant Ear, is a striking tropical plant appreciated for its glossy, arrow-shaped leaves. The leaves are deep green with contrasting white to silvery veins, resembling the patterns on a mask, hence the common name "African Mask Plant."`,
    image: '/images/alocasia-polly.png',
    care: {
      light: `It can tolerate some direct morning sun, but intense sunlight should be avoided, as it can scorch the leaves.`,
      watering: `Keep the soil consistently moist but not soggy. Water when the top inch of soil feels dry, typically every 1-2 weeks. Reduce watering in the winter when growth slows.`,
      soil: `Plant it in a well-draining potting mix rich in organic matter. A mix designed for aroids or tropical plants works well.`,
      seasonalCare: `During spring and summer it appreciates higher humidity levels. You can achieve this by misting the leaves regularly or placing a humidity tray nearby. During the winter, reduce watering and provide slightly cooler temperatures.`,
      fertilizing: `Feed every 4-6 weeks during the growing season (spring and summer) with a balanced, water-soluble fertilizer diluted to half strength.`,
    },
    tips: `Humidity: Maintain higher humidity levels to mimic its tropical habitat.
    Pot Size: Prefers slightly tight quarters. Repotting is usually necessary every 2-3 years.
    Pruning: Remove any damaged or yellowing leaves to encourage healthy growth.
    Pest Management: Keep an eye out for pests like spider mites and scale insects, which can sometimes infest Alocasia Polly. Treat promptly if you notice any issues.
    Toxicity: Be cautious if you have pets or small children, as Alocasia Polly is toxic if ingested.`,
    category: 'Foliage',
  },
  {
    name: `Begonia Maculata - Polka Dot`,
    description: `Commonly known as the Polka Dot Begonia, is an eye-catching houseplant. It is recognized for its unique foliage, which features large, asymmetrical, angel-wing-shaped leaves adorned with silvery-white spots and deep green coloration. This begonia can also produce clusters of delicate pink or white flowers, though it's primarily grown for its striking leaves.`,
    image: '/images/begonia-maculata.png',
    care: {
      light: `It should be shielded from direct sunlight, which can scorch its leaves. East or west-facing windows with filtered light are ideal.`,
      watering: `Keep the soil consistently moist but not waterlogged. Water when the top inch of soil feels dry. Ensure the pot has good drainage to prevent root rot. Reduce watering slightly during the winter months when growth slows.`,
      soil: `Use a well-draining potting mix that retains some moisture but doesn't become waterlogged. A mix formulated for begonias or a general-purpose potting mix amended with perlite or orchid bark works well.`,
      seasonalCare: `In the growing season (spring and summer), you can maintain higher humidity levels around the plant by misting it regularly or placing a humidity tray nearby.
      During the winter, reduce watering and allow the plant to rest. Growth will slow during this period.`,
      fertilizing: `Feed with a balanced, water-soluble fertilizer diluted to half strength every 4-6 weeks during spring and summer. Avoid fertilizing during the winter when the plant is resting.`,
    },
    tips: `Pruning: Trim leggy growth and remove any yellowing or dead leaves to encourage bushier growth.
    Pest Management: Keep an eye out for common indoor plant pests like mealybugs and spider mites, which can affect Begonia maculata. Treat promptly if you notice any infestations.
    Repotting: Repot when the plant becomes root-bound or outgrows its container, typically every 2-3 years in the spring.
    Propagation: Can be propagated through stem cuttings. Take cuttings with a few leaves attached and root them in a well-draining medium.
    Support: As the plant grows, you may need to provide gentle support to keep its stems from becoming too leggy.`,
    category: 'Foliage',
  },
  {
    name: `Bonsai - Acer Palmatum 'Yellow'`,
    description: `Acer palmatum, commonly known as Japanese Maple, is a popular choice for bonsai enthusiasts. The 'Yellow' variety is prized for its striking golden-yellow foliage. Bonsai trees are miniature representations of full-sized trees and require careful pruning and training to maintain their shape and size.`,
    image: '/images/????????.png',
    care: {
      light: `Acer palmatum 'Yellow' bonsai prefers partial shade to filtered sunlight. Protect it from intense midday sun, especially during the hottest summer months, as excessive sun can scorch the delicate leaves.`,
      watering: `Keep the soil consistently moist but not waterlogged. Water thoroughly when the top inch of soil feels slightly dry. Ensure that the pot has good drainage to prevent root rot. The frequency of watering may vary with the seasons; monitor the soil's moisture level closely.`,
      temperature: `Japanese Maple bonsai thrive in cool to mild temperatures. They do best in a range of 50-70°F (10-21°C) during the growing season. Protect the tree from extreme heat or cold, as they can be sensitive to temperature fluctuations.`,
      soil: `Use a well-draining bonsai soil mix, which typically includes a blend of Akadama, pumice, and lava rock. This type of soil promotes good drainage and aeration for the roots.`,
      seasonalCare: `Pruning: Regular pruning is essential to maintain the bonsai shape and encourage ramification (the development of smaller branches). Pruning is often done in late winter or early spring before the growing season.
      Repotting: Repot the bonsai every 2-3 years, typically in the spring. This allows for root inspection and maintenance.
      Wiring: Wiring can be used to shape and train branches. Be careful when wiring to avoid damaging the tree's delicate bark and branches.
      Winter Protection: During the winter, protect the bonsai from freezing temperatures by placing it in a sheltered area or using protective covers.`,
      fertilizing: `Fertilize your Acer palmatum 'Yellow' bonsai during the growing season (spring to early autumn) with a balanced, slow-release bonsai fertilizer. Reduce or cease fertilization during the winter when the tree is dormant.`,
    },
    tips: `Prune Carefully: Use sharp, clean bonsai pruning tools to make precise cuts. Avoid removing more than one-third of the foliage at a time.
    Protect from Wind: Strong winds can damage delicate branches and leaves, so place your bonsai in a sheltered spot during windy periods.
    Monitor for Pests: Keep an eye out for pests such as aphids, scale insects, and spider mites, and treat promptly if you notice any infestations.
    Rotate: To ensure even growth, rotate your bonsai periodically so that all sides receive equal light.
    Patience: Bonsai is an art that requires patience. It takes time to develop the desired shape and appearance, so be patient and enjoy the process.`,
    category: 'Bonsai',
  },
  {
    name: `Bonsai - Japanese Maple (Acer palmatum)`,
    description: `Japanese Maple bonsai features delicate, palmate leaves that transform into brilliant hues of red and orange in the fall.`,
    image: '/images/BonsaiAcerPalmatum.png',
    care: {
      light: `Prefers Partial shade with dappled sunlight; avoid harsh afternoon sun.`,
      watering: ` Keep the soil consistently moist but not waterlogged.`,
      soil: ` Well-draining, slightly acidic soil mix`,
      seasonalCare: `Protect from cold winds and frost, provide winter protection.`,
      fertilizing: ` Fertilize lightly in spring and summer.`,
    },
    tips: `Prune to maintain the desired shape, watch for aphids and scale insects, repot every 2-3 years, propagate from seeds or cuttings, use stakes for support if necessary.`,
    category: 'Bonsai',
  },
  {
    name: `Alocasia Zebrina`,
    description: `Also known as the "Zebra Plant" is a striking tropical houseplant prized for its unique and dramatic foliage. It features large, arrowhead-shaped leaves with bold green veins and striking zebra-like stripes that resemble the pattern of a zebra's skin. The plant's stems are also marked with contrasting zebra stripes.`,
    image: '/images/alocasia-zebrina.jpg',
    care: {
      light: `It can tolerate some morning or evening sun, but protect it from harsh, direct sunlight, which can scorch the leaves. Inadequate light can lead to leggy growth and smaller leaves.`,
      watering: `Keep the soil consistently moist but not waterlogged. Water thoroughly when the top inch of soil feels slightly dry. Allow excess water to drain from the pot. Be mindful not to let the plant sit in standing water, as it can lead to root rot.`,
      soil: `Plant in a well-draining, peat-based potting mix. A mix formulated for aroids or tropical plants works well. Ensure the pot has good drainage.`,
      seasonalCare: `Humidity: Maintain higher humidity levels around the plant, especially during the dry winter months. Use a humidity tray, room humidifier, or mist the leaves regularly.
      Pruning: Prune to remove any brown or damaged leaves and to encourage healthy growth.
      Cleaning: Wipe the leaves regularly with a damp cloth to remove dust and maintain their vibrant appearance.
      Winter Care: Reduce watering and avoid fertilizing during the winter when the plant's growth naturally slows.`,
      fertilizing: `Feed every 4-6 weeks during spring and summer with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization during the winter months when growth is slower.`,
    },
    tips: `Humidity: Maintain humidity levels above 50% if possible. Brown leaf edges or tips can indicate low humidity.
    Support: Use stakes or supports if the plant becomes top-heavy as it grows.
    Pot Size: Choose a pot that allows for some room for growth but doesn't overwhelm the plant. Repot as needed when the plant becomes root-bound.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Temperature Sensitivity: Protect the plant from temperature fluctuations and drafts.`,
    category: 'Easy-to-Care',
  },
  {
    name: `Schismatoglottis Wallichii`,
    description: `Is a striking tropical houseplant known for its distinctive foliage. It belongs to the Araceae family and is recognized for its large, arrow-shaped leaves that typically have a deep green color and prominent veining. The leaves are glossy and may have a slightly leathery texture.`,
    image: '/images/schismatoglottis-wallichii.png',
    care: {
      light: `It prefers filtered or dappled sunlight. Avoid exposing it to direct sunlight, as intense sun can scorch the leaves. Inadequate light can result in slower growth and less vibrant foliage.`,
      watering: `Keep the soil consistently moist but not waterlogged. Water when the top inch of soil feels slightly dry. Ensure that the pot has good drainage to prevent root rot. Maintain higher humidity levels around the plant, as it appreciates a more humid environment.`,
      soil: `Plant it in a well-draining, peat-based potting mix. The mix should retain moisture while also providing good aeration for the roots.`,
      seasonalCare: `Humidity: Maintain higher humidity levels around the plant, especially during the dry winter months. Use a humidity tray, room humidifier, or mist the leaves regularly.
      Pruning: Prune to remove any brown or damaged leaves and to encourage healthy growth.
      Cleaning: Wipe the leaves with a damp cloth to remove dust and maintain their glossy appearance.
      Winter Care: Reduce watering and avoid fertilizing during the winter when the plant is in a semi-dormant state.`,
      fertilizing: `Feed every 4-6 weeks during spring and summer with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization during the winter months when growth is slower.`,
    },
    tips: `Humidity: Consistently high humidity is important for this plant's well-being. Consider using a humidity tray, room humidifier, or misting the leaves to maintain proper moisture levels.
    Support: Provide support if the plant grows tall or becomes top-heavy.
    Rotation: Rotate the plant periodically to ensure even growth and prevent it from leaning toward the light source.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Repotting: Repot the plant when it becomes root-bound or outgrows its container, typically every 2-3 years. Choose a slightly larger pot as needed.`,
    category: 'Foliage',
  },
  {
    name: `Light Veins – Maranta`,
    description: `The Maranta Light Veins, also known as the Prayer Plant, is a popular and attractive houseplant known for its striking foliage. It features oval-shaped leaves with intricate patterns of dark green veins and light green backgrounds, resembling delicate artwork. The leaves fold up at night, resembling hands in prayer, which is the origin of its common name.`,
    image: '/images/light-maranta.png',
    care: {
      light: `Maranta Light Veins thrives in bright, indirect light. Avoid exposing it to direct sunlight, as it can scorch the leaves. It can tolerate lower light conditions, but its colors and patterns will be less vibrant.`,
      watering: `Keep the soil consistently moist but not waterlogged. Water when the top inch of soil feels slightly dry. Ensure that the pot has good drainage to prevent root rot. During the growing season (spring and summer), you may need to water more frequently, while in the winter, when growth slows, reduce watering.`,
      temperature: `Maranta Light Veins prefers temperatures between 65-75°F (18-24°C). Avoid exposing it to temperature extremes and drafts, which can stress the plant.`,
      soil: `Plant Maranta Light Veins in a well-draining, peat-based potting mix. A mix formulated for tropical plants or African violets is suitable. Good soil aeration is important for root health.`,
      seasonalCare: `Humidity: Maintain higher humidity levels around the plant, especially during the dry winter months. You can achieve this by misting the plant, using a humidity tray, or placing a room humidifier nearby.
      Pruning: Prune to remove any yellowing or damaged leaves and to encourage bushier growth.
      Cleaning: Wipe the leaves regularly with a damp cloth to remove dust and maintain their vibrant appearance.
      Winter Care: Reduce watering and avoid fertilizing during the winter when the plant's growth naturally slows.`,
      fertilizing: `Feed Maranta Light Veins every 4-6 weeks during the growing season (spring and summer) with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization during the winter months when growth is slower.`,
    },
    tips: `Humidity: Consistent humidity is crucial for Maranta. You can use a humidity tray or room humidifier to maintain the ideal moisture level.
    Rotation: Rotate the plant occasionally to ensure even growth and prevent it from leaning toward the light source.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Repotting: Repot the plant when it becomes root-bound or outgrows its container, typically every 2-3 years. Choose a slightly larger pot as needed.`,
    category: 'Easy-to-Care',
  },
  {
    name: `Aglaonema - Crete Flame`,
    description: `Aglaonema 'Crete Flame' is a stunning and vibrant cultivar of the Aglaonema genus, commonly known as "Chinese Evergreen." This variety is admired for its striking foliage featuring dark green leaves adorned with bright pink and red hues. The leaves are typically lance-shaped and have a glossy texture, adding a pop of color and tropical elegance to indoor spaces.`,
    image: '/images/aglaonema-crete-flame.png',
    care: {
      light: `Aglaonema 'Crete Flame' prefers moderate to low light conditions. It can tolerate low light but will exhibit more vibrant foliage colors in bright, indirect light. Avoid exposing it to direct sunlight, as it can scorch the leaves.`,
      watering: `Allow the top inch or so of the soil to dry out between waterings. Water thoroughly when needed, and ensure that the pot has good drainage to prevent waterlogged roots. Be cautious not to overwater, as Aglaonemas are susceptible to root rot.`,
      temperature: `Aglaonema 'Crete Flame' thrives in temperatures between 65-80°F (18-27°C). It is sensitive to cold drafts and should be protected from temperatures below 50°F (10°C).`,
      soil: `Plant in a well-draining, peat-based potting mix. A mix formulated for houseplants or a combination of potting soil, perlite, and peat moss works well. Good soil aeration is essential.`,
      seasonalCare: `Cleaning: Wipe the leaves occasionally with a damp cloth to remove dust and maintain their glossy appearance.
      Winter Care: Reduce watering and avoid fertilizing during the winter when the plant's growth naturally slows.`,
      fertilizing: `Feed Aglaonema 'Crete Flame' every 4-6 weeks during the growing season (spring and summer) with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization during the winter months.`,
    },
    tips: `Humidity: Aglaonema 'Crete Flame' appreciates higher humidity levels. You can use a humidity tray, room humidifier, or mist the leaves regularly.
    Pruning: Prune to remove any yellowing or damaged leaves and to maintain the desired shape.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Repotting: Repot the plant when it becomes root-bound or outgrows its container, typically every 2-3 years. Choose a slightly larger pot as needed.`,
    category: 'Purifying',
  },
  {
    name: `Phyllostachya Pink – Hypoestes`,
    description: `The Phyllostachya Pink – Hypoestes is a Polka Dot Plant which is a charming and popular houseplant valued for its brightly colored, spotted leaves. The 'Pink' variety, as the name suggests, features vibrant pink or reddish-pink spots on its foliage. The leaves are typically elliptical or ovate and have a soft, somewhat fuzzy texture. Polka Dot Plants are known for their attractive and eye-catching appearance, making them a delightful addition to indoor spaces.`,
    image: '/images/pink.png',
    care: {
      light: `Polka Dot Plants prefer bright, indirect light. They thrive in filtered sunlight or moderate shade. While they can tolerate some direct morning sunlight, it's essential to avoid intense, direct sun, which can scorch the leaves. Inadequate light can result in leggy growth and less vibrant foliage.`,
      watering: `Keep the soil consistently moist but not waterlogged. Water when the top inch of soil feels slightly dry. Polka Dot Plants appreciate consistent moisture, and it's crucial to avoid both overwatering and underwatering. Use room-temperature water and ensure proper drainage.`,
      temperature: `Polka Dot Plants prefer temperatures between 65-75°F (18-24°C). They are sensitive to temperature extremes and should be protected from drafts and temperatures below 50°F (10°C).`,
      soil: `Plant in a well-draining potting mix. A mix formulated for houseplants or a combination of potting soil, perlite, and peat moss works well. Ensure good soil aeration.`,
      seasonalCare: `Pruning: Prune to maintain the desired shape and to encourage bushier growth.
      Cleaning: Wipe the leaves occasionally with a damp cloth to remove dust and maintain their vibrant appearance.
      Winter Care: Reduce watering and avoid fertilizing during the winter when the plant's growth naturally slows.`,
      fertilizing: `Feed Polka Dot Plants every 4-6 weeks during the growing season (spring and summer) with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization during the winter months.`,
    },
    tips: `Humidity: Maintain higher humidity levels around the plant, especially during the dry winter months. You can use a humidity tray, room humidifier, or mist the plant to increase humidity.
    Pinching: Pinch or trim the plant occasionally to encourage compact growth and prevent it from becoming leggy.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and aphids, and treat promptly if you notice any infestations.
    Repotting: Repot when the plant becomes root-bound or outgrows its container, typically every 1-2 years. Choose a slightly larger pot as needed.`,
    category: 'Easy-to-Care',
  },
  {
    name: `Tillandsia cyanea – White`,
    description: `Tillandsia cyanea, commonly known as the "Pink Quill Plant," is an attractive and exotic bromeliad species. The 'Branca' variety is known for its stunning pink or magenta bracts that resemble flowers, although they are actually modified leaves. The true flowers are small and inconspicuous, nestled within the colorful bracts. This plant features long, arching, strap-like leaves that are typically green or silver-green, adding to its unique appearance.`,
    image: '/images/tillandsia-cyanea-white.png',
    care: {
      light: `Tillandsia cyanea 'Branca' prefers bright, indirect light. It thrives in filtered sunlight or moderate shade. Avoid exposing it to direct sunlight, as this can scorch the leaves. Adequate light is essential for vibrant bract color and healthy growth.`,
      watering: `Water the plant thoroughly by submerging it in a container of water for about 10-15 minutes every 1-2 weeks during the growing season (spring and summer). Ensure that it drains thoroughly before returning it to its display location. Reduce watering in the winter when growth slows, typically to once a month or as needed.`,
      temperature: `Tillandsia cyanea 'Branca' prefers temperatures between 60-80°F (15-27°C). It can tolerate slightly cooler conditions but should be protected from cold drafts and temperatures below 50°F (10°C).`,
      soil: `This bromeliad is epiphytic, meaning it naturally grows on other surfaces like tree branches rather than in soil. You can mount it on a piece of bark, driftwood, or place it in a pot with a well-draining bromeliad mix. The medium should provide stability and allow good air circulation around the roots.`,
      seasonalCare: `Humidity: Tillandsia cyanea 'Branca' appreciates higher humidity levels. In drier indoor environments, you can maintain humidity by misting the plant or placing a humidity tray nearby.
      Pruning: Trim away any dead or browned leaves as they appear.
      Cleaning: Rinse the plant occasionally with water to remove dust and debris from the foliage.`,
      fertilizing: `Feed Tillandsia cyanea 'Branca' every 2-4 weeks during the growing season with a diluted, water-soluble, balanced fertilizer specifically formulated for bromeliads or air plants. Follow the manufacturer's recommendations for dosage.`,
    },
    tips: `Air Circulation: Ensure good air circulation around the plant to prevent fungal issues and promote overall health.
    Display: Place the Pink Quill Plant in a decorative container, hanging basket, or mounted on a suitable surface to show off its unique appearance.
    Water Quality: Use room-temperature, filtered, or rainwater for submerging or misting the plant. Tap water with high mineral content can leave deposits on the leaves over time.`,
    category: 'Suspended',
  },
  {
    name: `Syngonium Pixie`,
    description: `Syngonium pixie is a compact and charming houseplant known for its small, arrowhead-shaped leaves. The leaves typically feature a combination of green and creamy-white variegation, creating an attractive and delicate appearance. It's a popular choice for tabletops and small spaces due to its manageable size.`,
    image: '/images/syngonium-pixie.png',
    care: {
      light: `Syngonium pixie thrives in bright, indirect light. It can tolerate some dappled sunlight, but avoid exposing it to direct sunlight, which can scorch the leaves. Lower light conditions are also acceptable but may result in slower growth and less vibrant variegation.`,
      watering: `Keep the soil consistently moist but not waterlogged. Water when the top inch of soil feels slightly dry. Ensure that the pot has good drainage to prevent overwatering. Reduce watering during the winter when the plant's growth slows.`,
      temperature: `Syngonium pixie prefers temperatures between 65-75°F (18-24°C). It can tolerate slightly cooler temperatures but should be protected from drafts and temperatures below 50°F (10°C).`,
      soil: `Plant Syngonium pixie in a well-draining, peat-based potting mix. A mix formulated for aroids or tropical plants works well. Good soil aeration is important for root health.`,
      seasonalCare: `Pruning: Prune Syngonium pixie as needed to maintain its compact shape and encourage bushier growth.
      Cleaning: Wipe the leaves with a damp cloth to remove dust and maintain their appearance.
      Winter Care: Reduce watering and avoid fertilizing during the winter when the plant's growth naturally slows.`,
      fertilizing: `Feed Syngonium pixie every 4-6 weeks during the growing season (spring and summer) with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization during the winter months.`,
    },
    tips: `Support: As the plant grows, consider providing small stakes or supports to help maintain an upright and tidy appearance.
    Humidity: Syngonium pixie appreciates higher humidity levels. You can increase humidity by misting the plant or placing a humidity tray nearby.
    Propagation: Syngonium pixie can be easily propagated from stem cuttings placed in water or directly in soil.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Repotting: Repot the plant when it becomes root-bound or outgrows its container. Typically, this is needed every 2-3 years in the spring.`,
    category: 'Pet Friendly',
  },
  {
    name: `Senecio rowleyanus 'Tear drops'`,
    description: `The String of Pearls is a unique and eye-catching succulent plant known for its cascading growth habit. It belongs to the Senecio genus and is characterized by its slender, trailing stems that are lined with small, spherical leaves resembling pearls. The leaves are typically green but can vary in color depending on light conditions. When grown in bright, indirect light, they often take on a lighter green hue.`,
    image: '/images/tear-drops.png',
    care: {
      light: `Senecio rowleyanus 'Tear Drops' thrives in bright, indirect light. It does well in partial shade or filtered sunlight. Avoid exposing it to direct sunlight, as this can scorch the delicate leaves. Inadequate light may lead to leggy growth.`,
      watering: `Allow the soil to dry out between waterings. Water sparingly but thoroughly when the top inch of soil feels dry. It's important not to overwater, as this plant is susceptible to rot. During the growing season (spring and summer), water more frequently, and reduce watering in the winter when growth slows.`,
      temperature: `String of Pearls prefers temperatures between 70-80°F (21-27°C) during the growing season. It can tolerate slightly cooler conditions but should be protected from frost and temperatures below 50°F (10°C).`,
      soil: `Plant in a well-draining succulent or cactus potting mix. Good drainage is essential to prevent waterlogged roots.`,
      seasonalCare: `Pruning: Trim or prune the plant as needed to maintain its desired shape and to remove any leggy or unhealthy stems.
      Cleaning: Remove dust and debris from the pearls by gently wiping the leaves with a damp cloth.`,
      fertilizing: `Feed String of Pearls every 4-6 weeks during the growing season (spring and summer) with a balanced, water-soluble succulent fertilizer diluted to half strength. Avoid fertilizing during the winter when the plant is resting.`,
    },
    tips: `Hanging or Trailing: String of Pearls is an ideal candidate for hanging baskets or tall containers, allowing its trailing stems to cascade gracefully.
    Support: Provide support or a trellis if the stems become too long and start to trail excessively.
    Propagation: You can propagate new plants from stem cuttings. Simply cut a healthy stem with pearls, let it callus for a day or two, and then plant it in well-draining soil.
    Pest Management: Check for common succulent pests like mealybugs and aphids, and treat them promptly if you notice any infestations.`,
    category: 'Suspended',
  },
  {
    name: `Sedum Burrito`,
    description: `Sedum burrito, commonly known as the "Burro's Tail" or "Donkey Tail," is a charming succulent plant appreciated for its trailing growth habit. It belongs to the Sedum genus and features long, trailing stems densely covered in small, rounded, bluish-green leaves. The leaves give the plant its distinctive appearance, resembling the tail of a donkey or burro. When grown in optimal conditions, this succulent may produce small, star-shaped pink or red flowers in late summer.`,
    image: '/images/sedum-burrito.png',
    care: {
      light: `Sedum burrito thrives in bright, indirect light. It prefers partial to full sunlight but should be protected from intense, direct sun, which can scorch the leaves. Adequate light is crucial for healthy growth and maintaining the plant's vibrant color.`,
      watering: `Allow the soil to dry out between waterings. Water sparingly but thoroughly when the top inch or two of soil feels dry to the touch. Overwatering can lead to root rot, so it's essential to err on the side of underwatering, especially during the dormant winter period. Water more frequently during the active growing season in spring and summer.`,
      temperature: `Sedum burrito prefers temperatures between 60-75°F (15-24°C) during the growing season. It can tolerate slightly cooler temperatures but should be protected from frost and freezing conditions.`,
      soil: `Plant in a well-draining succulent or cactus potting mix. Good drainage is crucial to prevent waterlogged roots.`,
      seasonalCare: `Pruning: Trim or prune the plant as needed to control its growth and to maintain its desired shape.
      Cleaning: Remove dust and debris from the leaves by gently wiping them with a damp cloth.`,
      fertilizing: `Feed Sedum burrito every 4-6 weeks during the growing season (spring and summer) with a balanced, water-soluble succulent fertilizer diluted to half strength. Avoid fertilizing during the winter when the plant is dormant.`,
    },
    tips: `Hanging or Trailing: Sedum burrito is often grown in hanging baskets or containers to showcase its trailing stems. Ensure the pot or basket has good drainage.
    Support: Provide support or a trellis if the stems become too long and start to trail excessively.
    Propagation: You can propagate new plants from stem cuttings. Simply cut a healthy stem segment, let it callus for a day or two, and then plant it in well-draining soil.
    Pest Management: Check for common succulent pests like mealybugs and aphids, and treat them promptly if you notice any infestations.`,
    category: 'Easy-to-Care',
  },
  {
    name: `Scindapsus pictus 'Argyraeus'`,
    description: `Scindapsus pictus 'Argyraeus' is a popular and visually appealing houseplant known for its striking foliage. It belongs to the Araceae family. This variety of Satin Pothos features heart-shaped leaves with a glossy texture and striking silver or silvery-white markings. The variegation on the leaves resembles satin or silk fabric, hence the common name. The vine-like stems of the plant trail gracefully, making it an excellent choice for hanging baskets or as a trailing houseplant.`,
    image: '/images/scindapsus-pictus.jpg',
    care: {
      light: `Scindapsus pictus 'Argyraeus' thrives in moderate to bright, indirect light. It can tolerate lower light conditions but may lose some of its variegation in low-light settings. Avoid exposing it to direct sunlight, as this can scorch the leaves.`,
      watering: `Allow the top inch or so of the soil to dry out between waterings. Water thoroughly when the soil feels dry, and ensure that excess water drains away. Satin Pothos prefers to remain slightly moist but not waterlogged. It is more forgiving of underwatering than overwatering.`,
      temperature: `Satin Pothos prefers temperatures between 65-80°F (18-27°C). It can tolerate slightly cooler conditions but should be protected from drafts and temperatures below 50°F (10°C).`,
      soil: `Plant in a well-draining potting mix. A standard houseplant mix with good drainage works well. Ensure that the pot has proper drainage holes.`,
      seasonalCare: `Pruning: Prune or trim the plant as needed to control its growth and to maintain the desired shape. Trimming can also encourage bushier growth.`,
      fertilizing: `Feed Scindapsus pictus 'Argyraeus' every 4-6 weeks during the growing season (spring and summer) with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization during the winter months when growth is slower.`,
    },
    tips: `Support: Provide support if you want the plant to climb. Satin Pothos can be trained on a trellis or moss pole.
    Propagation: Propagate Satin Pothos by taking stem cuttings and rooting them in water or directly in soil.
    Cleaning: Wipe the leaves occasionally with a damp cloth to remove dust and maintain their glossy appearance.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Indoor vs. Outdoor: Satin Pothos is primarily an indoor plant but can be grown outdoors in mild climates.`,
    category: 'Easy-to-Care',
  },
  {
    name: `Pilea Peperomioides`,
    description: `Pilea peperomioides is a charming and distinctive houseplant known for its round, coin-shaped leaves on upright stems. It belongs to the Urticaceae family. The leaves are bright green, slightly succulent, and have a unique pancake or UFO-like shape, which adds to its appeal. This plant is often grown for its decorative foliage and ease of care.`,
    image: '/images/pilea-peperomioides.png',
    care: {
      light: `Chinese Money Plants thrive in bright, indirect light. They can tolerate some direct morning sunlight but should be protected from harsh, intense afternoon sun, which can scorch the leaves. Inadequate light may lead to leggy growth, and too much direct sunlight can cause leaf burn.`,
      watering: `Allow the top inch or so of the soil to dry out between waterings. Water thoroughly but less frequently during the winter months when growth slows. Pilea peperomioides prefers to remain slightly moist but not waterlogged. Avoid overwatering, as this can lead to root rot.`,
      temperature: `Maintain a consistent indoor temperature between 60-75°F (15-24°C). Avoid exposing the plant to temperature extremes or drafts, as it prefers stable conditions.`,
      soil: `Plant in a well-draining potting mix. A standard indoor potting mix with good drainage works well. Ensure that the pot has proper drainage holes.`,
      seasonalCare: `Pruning: Prune or pinch the plant as needed to encourage bushier growth and to remove any leggy or damaged stems.
      Repotting: Repot when the plant becomes root-bound or outgrows its container, typically every 2-3 years. Choose a slightly larger pot as needed.
      Propagation: Chinese Money Plants are easy to propagate. You can propagate them by taking stem cuttings and rooting them in water or directly in soil.`,
      fertilizing: `Fertilizing: Feed Pilea peperomioides every 4-6 weeks during the growing season (spring and summer) with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization during the winter months when growth is slower.`,
    },
    tips: `Rotation: Rotate the plant periodically to ensure even growth and to prevent it from leaning toward the light source.
    Cleaning: Wipe the leaves occasionally with a damp cloth to remove dust and maintain their vibrant appearance.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Sharing: Pilea peperomioides is often referred to as the "Pass It On" plant because it produces many "pups" or baby plants around the base. These can be separated and shared with friends or used to grow new plants.`,
    category: 'Pet Friendly',
  },
  {
    name: `Phalaenopsis - "Orchid"`,
    description: `Phalaenopsis orchids, often called "Moth Orchids," are known for their striking, butterfly-like flowers and graceful, arching stems. These orchids come in various colors and patterns, making them a popular choice for indoor plant enthusiasts.`,
    image: '/images/phalaenopsis-orquídea.png',
    care: {
      light: `Phalaenopsis orchids thrive in bright, indirect light. Place them near a north or east-facing window to provide them with the appropriate light levels. Protect them from direct sunlight, which can scorch the leaves.`,
      watering: `Water Phalaenopsis orchids when the potting mix feels dry to the touch, typically every 1-2 weeks. Water thoroughly, allowing excess water to drain from the pot. Avoid letting the orchid sit in standing water, as it can lead to root rot.`,
      temperature: `Phalaenopsis orchids prefer temperatures between 65-80°F (18-27°C). They are sensitive to cold drafts and should be shielded from temperatures below 60°F (15°C).`,
      soil: `Plant Phalaenopsis orchids in a well-draining orchid mix or a mix of sphagnum moss and perlite. Good aeration is essential for healthy orchid roots.`,
      seasonalCare: `Humidity: Maintain higher humidity levels around the orchid, especially during the drier winter months. You can achieve this by using a humidity tray or a room humidifier.
      Repotting: Repot your Phalaenopsis orchid every 1-2 years or when it outgrows its container or the potting mix breaks down. Spring is an ideal time for repotting.
      Pruning: After the orchid has finished blooming, you can trim the spent flower spikes to encourage new growth.`,
      fertilizing: `Feed Phalaenopsis orchids with a balanced, water-soluble orchid fertilizer diluted to half strength every 2-4 weeks during the growing season (spring and summer). Reduce or stop fertilizing during the winter months.`,
    },
    tips: `Air Circulation: Good air circulation helps prevent the development of fungal or bacterial issues. Ensure proper ventilation around your orchid.
    Support: Use stakes or clips to support the arching flower spikes as they grow.
    Monitor Roots: Orchid roots should be healthy and silvery-green. If they turn brown or mushy, it may indicate overwatering or root rot.
    Patience: Orchids can take time to rebloom. Be patient, as it can be several months between flowering cycles.
    Pest Management: Keep an eye out for pests like scale insects, mealybugs, and aphids, and treat promptly if you notice any infestations.`,
    category: 'Pet Friendly',
  },
  {
    name: `Pachira Aquatica`,
    description: `Pachira aquatica is commonly known as the "Money Tree" or "Guiana Chestnut." It is a popular tropical houseplant known for its distinctive braided trunk and lush, palmate leaves. It's believed to bring good luck and fortune according to feng shui practices.`,
    image: '/images/pachira-aquatica.png',
    care: {
      light: `Pachira aquatica prefers bright, indirect light. It can tolerate some morning or evening sun, but it's best to protect it from harsh, direct sunlight, which can scorch the leaves. This plant can adapt to lower light conditions, but its growth may slow.`,
      watering: `Keep the soil evenly moist but not waterlogged. Water thoroughly when the top inch of soil feels slightly dry. Allow excess water to drain from the pot, as Pachira is sensitive to waterlogged soil. In the winter, reduce watering frequency.`,
      temperature: `Pachira aquatica prefers warm temperatures between 65-75°F (18-24°C). It can tolerate slightly cooler temperatures, but it's best to avoid exposing it to cold drafts and temperatures below 50°F (10°C).`,
      soil: `Plant Pachira aquatica in a well-draining, peat-based potting mix. The mix should retain some moisture but provide good aeration for the roots.`,
      seasonalCare: `Pruning: Prune to maintain the desired shape and remove any leggy or damaged growth.
      Cleaning: Wipe the leaves with a damp cloth to remove dust and maintain their glossy appearance.
      Winter Care: Reduce watering and avoid fertilizing during the winter when the plant's growth naturally slows.`,
      fertilizing: `Feed Pachira aquatica every 4-6 weeks during the growing season (spring and summer) with a balanced, water-soluble fertilizer diluted to half strength. Reduce or cease fertilization during the winter months when growth is slower.`,
    },
    tips: `Braiding: The unique braided trunk is a signature feature of Pachira aquatica. Be gentle when handling to avoid damaging the braided structure.
    Support: If the plant gets top-heavy, consider staking it to provide support and maintain its upright growth.
    Pest Management: Watch for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Repotting: Repot the plant when it becomes root-bound, typically every 2-3 years. Choose a slightly larger pot as needed.`,
    category: 'Easy-to-Care',
  },
  {
    name: `Monstera Variegate`,
    description: `Monstera variegata is a stunning tropical houseplant known for its distinct variegated foliage. It belongs to the Araceae family. The leaves are large and typically heart-shaped, with unique creamy-white to yellow variegation patterns that can vary from plant to plant. The variegation adds a striking contrast to the deep green portions of the leaves, making it a highly sought-after and prized houseplant.`,
    image: '/images/monstera-variegate.jpg',
    care: {
      light: `Variegated Monstera thrives in bright, indirect light. It can tolerate some dappled sunlight, but direct sunlight should be avoided, as it can scorch the leaves. Insufficient light may result in less variegation and slower growth.`,
      watering: `Allow the top inch or so of the soil to dry out between waterings. Water thoroughly when the soil feels dry to the touch. Ensure that the pot has proper drainage to prevent waterlogged roots. Adjust the watering frequency based on the season; reduce watering in winter when growth slows.`,
      temperature: `Maintain indoor temperatures between 65-80°F (18-27°C) for Variegated Monstera. Protect the plant from drafts and sudden temperature fluctuations, as it prefers consistent conditions.`,
      soil: `Plant in a well-draining potting mix formulated for indoor plants. A mix that retains some moisture while allowing excess water to drain away is suitable.`,
      seasonalCare: `Pruning: Prune as needed to control the plant's growth and to maintain the desired shape. Pruning can also help promote bushier growth.`,
      fertilizing: `Feed Variegated Monstera every 4-6 weeks during the growing season (spring and summer) with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization in the winter when growth is slower.`,
    },
    tips: `Support: Provide a trellis or support for Variegated Monstera to climb, as it can grow as a vining plant. This will help it maintain an upright appearance and display its variegated leaves.
    Propagation: Variegated Monstera can be propagated from stem cuttings with nodes. Root the cuttings in water or directly in soil.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Humidity: These plants appreciate higher humidity levels. You can increase humidity by misting the plant, using a humidity tray, or placing a humidifier nearby.`,
    category: 'Easy-to-Care',
  },
  {
    name: `Monstera Adansonii 'Monkey Leaf'`,
    description: `Monstera adansonii 'Monkey Leaf' is a popular tropical houseplant known for its distinctive foliage. It belongs to the Araceae family. The leaves are typically small, about 1 to 3 inches long, and have unique, Swiss cheese-like holes (fenestrations) and irregular, wavy edges. The 'Monkey Leaf' variety is a compact version of the Monstera adansonii, making it suitable for smaller spaces.`,
    image: '/images/monstera-adansonii.jpg',
    care: {
      light: `'Monkey Leaf' thrives in bright, indirect light. It can tolerate some dappled sunlight, but avoid direct sunlight, as it can scorch the leaves. Inadequate light may result in slower growth and smaller leaves.`,
      watering: `Allow the top inch or so of the soil to dry out between waterings. Water thoroughly when the soil feels dry to the touch. Ensure that the pot has good drainage to prevent waterlogged roots. Adjust the frequency of watering based on the season; reduce watering in winter when the plant's growth slows.`,
      temperature: `Maintain indoor temperatures between 65-80°F (18-27°C) for 'Monkey Leaf.' Protect the plant from drafts and sudden temperature fluctuations, as it prefers consistent conditions.`,
      soil: `Plant in a well-draining potting mix formulated for indoor plants. A mix that retains some moisture while allowing excess water to drain away is suitable.`,
      seasonalCare: `Pruning: Prune as needed to control the plant's growth and to maintain the desired shape. Pruning can help promote bushier growth.`,
      fertilizing: `Feed 'Monkey Leaf' every 4-6 weeks during the growing season (spring and summer) with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization in the winter when growth is slower.`,
    },
    tips: `Support: Provide a trellis or support for 'Monkey Leaf' to climb if desired, as it can grow as a vining plant. This will help it maintain an upright appearance.
    Propagation: Monstera adansonii is easily propagated from stem cuttings. Simply cut a healthy stem section with a few nodes and root it in water or directly in soil.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Humidity: These plants appreciate higher humidity levels. You can increase humidity by misting the plant, using a humidity tray, or placing a humidifier nearby.`,
    category: 'Easy-to-Care',
  },
  {
    name: `Ceropegia Woodii String of Hearts`,
    description: `Ceropegia woodii is a charming and unique trailing succulent plant known for its cascading vines of heart-shaped leaves. It belongs to the Apocynaceae family. The leaves are typically green with silver marbling on the top side and purple undersides. When grown in optimal conditions, this plant produces small tubular flowers that resemble delicate pink or purple lanterns. Its trailing growth habit makes it an ideal candidate for hanging baskets or tall containers.`,
    image: '/images/string-of-hearts.png',
    care: {
      light: `String of Hearts thrives in bright, indirect light. It can tolerate some direct sunlight, especially if it's protected from harsh midday sun. Inadequate light may lead to leggy growth, while too much direct sun can scorch the leaves.`,
      watering: `Allow the soil to dry out between waterings. Water sparingly but thoroughly when the top inch of soil feels dry to the touch. Overwatering can lead to root rot, so it's essential to let the soil dry moderately between waterings. Water less frequently during the winter when growth slows.`,
      temperature: `String of Hearts prefers indoor temperatures between 60-75°F (15-24°C). It can tolerate slightly cooler conditions but should be protected from frost and temperatures below 50°F (10°C).`,
      soil: `Plant in a well-draining succulent or cactus potting mix. Good drainage is crucial to prevent waterlogged roots.`,
      seasonalCare: `Pruning: Trim or prune the plant as needed to control its growth and to maintain the desired shape.
      Cleaning: Wipe the leaves occasionally with a damp cloth to remove dust and maintain their glossy appearance.`,
      fertilizing: `Feed String of Hearts every 4-6 weeks during the growing season (spring and summer) with a balanced, water-soluble succulent fertilizer diluted to half strength. Reduce or cease fertilization during the winter when the plant is resting.`,
    },
    tips: `Hanging or Trailing: String of Hearts is an ideal plant for hanging baskets or containers with tall sides, allowing its trailing stems to cascade gracefully.
    Support: Provide support or a trellis if the stems become too long and start to trail excessively.
    Propagation: You can propagate new plants from stem cuttings. Simply cut a healthy stem with several nodes, let it callus for a day or two, and then plant it in well-draining soil.
    Pest Management: Check for common succulent pests like mealybugs and aphids, and treat them promptly if you notice any infestations.
    String of Hearts is a delightful and easy-to-care-for succulent that can add a touch of elegance to your indoor or outdoor space with its unique trailing form. With proper care, it will thrive and create a stunning visual display.`,
    category: 'Suspended',
  },
  {
    name: `Ficus Benjamina Variegate`,
    description: `Ficus benjamina variegate, commonly known as the "Variegated Weeping Fig," is a popular indoor tree or shrub prized for its elegant, glossy green leaves with creamy-white variegation. It has a graceful, weeping growth habit, making it a beautiful and decorative addition to indoor spaces.`,
    image: '/images/ficus-variegate.png',
    care: {
      light: `Ficus benjamina variegate prefers bright, indirect light. It can tolerate some direct morning sunlight, but it's best to protect it from harsh, intense afternoon sun, which can scorch the leaves. Inadequate light may lead to leaf drop and reduced variegation.`,
      watering: `Allow the top inch or so of the soil to dry out between waterings. Water thoroughly when needed, ensuring that excess water drains from the pot. Be cautious not to overwater, as Ficus benjamina variegate is sensitive to waterlogged roots.`,
      temperature: `Ficus benjamina variegate prefers temperatures between 65-75°F (18-24°C). It can tolerate slightly cooler temperatures but should be shielded from drafts and temperatures below 50°F (10°C).`,
      soil: `Plant in well-draining, slightly acidic potting mix. A mix designed for houseplants with good aeration and drainage is suitable. Repot as needed when the plant becomes root-bound.`,
      seasonalCare: `Pruning: Prune to maintain the desired shape and size. Ficus benjamina variegate can be trained into various forms, including single-stemmed or bushier shapes.
      Cleaning: Wipe the leaves with a damp cloth to remove dust and maintain their glossy appearance.
      Winter Care: Reduce watering and avoid fertilizing during the winter months when the plant's growth naturally slows.`,
      fertilizing: `Feed Ficus benjamina variegate every 4-6 weeks during the growing season (spring and summer) with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization during the winter months.`,
    },
    tips: `Support: Provide a stake or support if the plant grows tall and becomes top-heavy.
    Humidity: Ficus benjamina variegate appreciates higher humidity levels. Use a humidity tray, room humidifier, or mist the leaves regularly.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Repotting: Repot when the plant becomes root-bound or outgrows its container, typically every 2-3 years.`,
    category: 'Purifying',
  },
  {
    name: `Ficus elastica 'Robusta'`,
    description: `Ficus elastica 'Robusta' is a popular indoor plant known for its striking foliage and air-purifying qualities. It belongs to the Moraceae family. The Rubber Plant features large, glossy, oval-shaped leaves that are typically deep green, and they can grow to be quite large, providing an impressive visual presence. 'Robusta' is a variety of the Rubber Plant that is often chosen for its robust growth and resilience.`,
    image: '/images/ficus-elastica.png',
    care: {
      light: `Rubber Plants thrive in bright, indirect light. They can tolerate lower light conditions but will grow more slowly in such situations. Avoid exposing them to direct sunlight, as it can scorch the leaves. Rotate the plant periodically to ensure even growth.`,
      watering: `Allow the top inch or so of the soil to dry out between waterings. Water thoroughly when the soil feels dry to the touch. Ensure that the pot has proper drainage to prevent waterlogging. Reduce the frequency of watering during the winter months when growth is slower.`,
      temperature: `Rubber Plants prefer indoor temperatures between 60-75°F (15-24°C). They are sensitive to cold drafts and should be protected from temperatures below 50°F (10°C).`,
      soil: `Plant in a well-draining potting mix designed for indoor plants. A mix with good aeration and drainage properties works well.`,
      seasonalCare: `Pruning: Trim or prune the plant as needed to control its growth and to maintain the desired shape. Pruning can also help promote bushier growth.`,
      fertilizing: `Feed Ficus elastica 'Robusta' every 4-6 weeks during the growing season (spring and summer) with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization in the winter when growth is slower.`,
    },
    tips: `Support: Provide support for the plant if it becomes top-heavy or starts to lean. A stake or trellis can help maintain an upright appearance.
    Repotting: Repot your Rubber Plant every 2-3 years or when it becomes root-bound. Choose a slightly larger pot with good drainage.
    Cleaning: Wipe the leaves occasionally with a damp cloth to remove dust and maintain their glossy appearance.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Air Purification: Rubber Plants are known for their air-purifying properties, helping to improve indoor air quality.`,
    category: 'Purifying',
  },
  {
    name: `Monstera Deliciosa`,
    description: `Monstera deliciosa, also known as the "Swiss Cheese Plant" or "Split-Leaf Philodendron," is a popular and iconic tropical houseplant. It's recognized for its large, glossy, split leaves that develop unique holes and splits as it matures. The plant can grow both as a bushy, floor-standing plant or trained to climb with proper support.`,
    image: '/images/monstera-deliciosa.png',
    care: {
      light: `Monstera deliciosa thrives in bright, indirect light. It can tolerate some dappled sunlight, but it should be protected from direct sun exposure, which can scorch the leaves. Avoid low light conditions, as they can lead to leggy growth and smaller leaves.`,
      watering: `Keep the soil consistently moist but not waterlogged. Water when the top 1-2 inches of soil feel dry. Ensure that the pot has good drainage to prevent root rot. Reduce watering during the winter months when growth slows.`,
      temperature: `Monstera deliciosa prefers temperatures between 65-85°F (18-29°C). It can tolerate slightly cooler temperatures but should be protected from frost and temperatures below 50°F (10°C).`,
      soil: `Plant Monstera deliciosa in a well-draining potting mix that retains some moisture but also provides good aeration for the roots. A mix containing peat, perlite, and orchid bark works well.`,
      seasonalCare: `Support: If you want your Monstera to climb, provide a sturdy support structure like a moss pole or trellis to help it grow vertically.
      Pruning: Prune to control the size and shape of the plant and to remove any damaged or yellowing leaves.
      Cleaning: Wipe the leaves with a damp cloth to remove dust and keep them looking glossy.`,
      fertilizing: `Feed Monstera deliciosa every 4-6 weeks during the growing season (spring and summer) with a balanced, water-soluble fertilizer diluted to half strength. Reduce or cease fertilization during the winter months when growth is slower.`,
    },
    tips: `Support for Climbing: If you want your Monstera to climb, provide a support structure like a moss pole or trellis to encourage upward growth.
    Air Roots: Monstera deliciosa produces aerial roots that can be trained to grip onto supports. You can mist these roots occasionally to provide moisture.
    Pruning and Propagation: Prune the plant as needed to maintain its shape and size. You can also propagate Monstera from stem cuttings.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Rotate: Rotate the plant occasionally to ensure even growth and prevent it from leaning toward the light source.`,
    category: 'Easy-to-Care',
  },
  {
    name: `Hedera helix - "Hera"`,
    description: `English Ivy is a trailing or climbing vine with distinctive, lobed leaves. The leaves are typically deep green, but some varieties may have variegation. Ivy is valued for its ability to trail gracefully from hanging baskets, climb walls or trellises, and provide a lush, green backdrop.`,
    image: '/images/hera.png',
    care: {
      light: `English Ivy prefers bright, indirect light but can tolerate lower light conditions. Some morning or evening sunlight is acceptable, but avoid intense, direct sunlight that can scorch the leaves.`,
      watering: `Keep the soil consistently moist but not waterlogged. Water when the top inch of soil feels dry. Ivy appreciates humidity, so misting the plant or using a humidity tray can be beneficial, especially in dry indoor environments.`,
      temperature: `English Ivy prefers temperatures between 50-75°F (10-24°C). It can tolerate slightly cooler conditions but should be protected from drafts and temperatures below 45°F (7°C).`,
      soil: `Plant English Ivy in a well-draining potting mix with organic matter. A mix designed for houseplants or a blend of potting soil, perlite, and peat moss is suitable.`,
      seasonalCare: `Pruning: Regularly trim and pinch back the growth to maintain the desired shape and encourage bushier growth.
      Cleaning: Wipe the leaves occasionally with a damp cloth to remove dust and prevent pests.`,
      fertilizing: `Feed English Ivy every 4-6 weeks during the growing season (spring and summer) with a balanced, water-soluble houseplant fertilizer diluted to half strength. Reduce or cease fertilization during the winter months when growth is slower.`,
    },
    tips: `Support: Provide a trellis or stakes if you want the Ivy to climb. Otherwise, it makes an excellent trailing plant in hanging baskets.
    Pruning for Propagation: You can propagate English Ivy from cuttings taken while pruning.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and aphids, and treat promptly if you notice any infestations.
    Repotting: Repot when the plant becomes root-bound or outgrows its container, typically every 2-3 years.
    Remember that specific care requirements may vary slightly depending on the exact variety or cultivar of English Ivy, such as "Hera." If you have more detailed information about "Hera," it's a good idea to follow any specific care instructions provided for that variety.`,
    category: 'Pet Friendly',
  },
  {
    name: `Strelitzia Nicolai`,
    description: `Strelitzia nicolai is a stunning tropical plant known for its dramatic foliage and resemblance to a banana tree. It belongs to the Strelitziaceae family and is characterized by its large, paddle-shaped leaves that are arranged in a fan-like manner. The leaves are deep green and can reach impressive sizes, often exceeding 3 feet in length. In its native habitat, it can produce striking white and blue bird-like flowers, but this is less common in indoor settings.`,
    image: '/images/strelitzia.png',
    care: {
      light: `Giant Bird of Paradise thrives in bright, indirect light. It prefers full sunlight but can tolerate partial shade. Inadequate light may slow its growth and reduce the chances of flowering. However, avoid exposing it to direct, harsh sunlight, which can scorch the leaves.`,
      watering: `Keep the soil moderately moist during the growing season (spring and summer). Water thoroughly when the top inch of soil feels dry to the touch. Reduce watering in the dormant season (fall and winter), allowing the soil to dry out more between waterings. It's essential not to overwater, as this can lead to root rot.`,
      temperature: `Strelitzia nicolai prefers temperatures between 65-70°F (18-24°C) during the day and slightly cooler temperatures at night. It can tolerate occasional drops in temperature but should be protected from frost and cold drafts.`,
      soil: `Plant in a well-draining, rich potting mix that retains some moisture. A mix formulated for tropical plants or a blend of potting soil, perlite, and peat moss works well.`,
      seasonalCare: `Pruning: Prune dead or damaged leaves as needed to maintain the plant's appearance.
      Cleaning: Wipe the leaves occasionally with a damp cloth to remove dust and maintain their glossy appearance.
      Repotting: Repot when the plant becomes root-bound or outgrows its container, typically every 2-3 years.`,
      fertilizing: `Feed Strelitzia nicolai every 4-6 weeks during the growing season (spring and summer) with a balanced, water-soluble fertilizer formulated for tropical plants. Dilute the fertilizer to half strength. Reduce or cease fertilization during the dormant season.`,
    },
    tips: `Support: Provide support for the tall stems to prevent them from toppling as the plant matures.
    Pruning Flowers: If your Giant Bird of Paradise produces flowers, you can prune them after they fade to encourage further leaf growth.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Indoor vs. Outdoor: While Giant Bird of Paradise can be grown indoors, it also thrives as an outdoor landscape plant in suitable climates.`,
    category: 'Tropical',
  },
];

async function insertPlants() {
  try {
    // establishing the connection with our DB
    let db = await mongoose.connect(MONGO_URI);

    // Feedback regarding our connection
    console.log('Database is now connected');

    // Create Plants in our database with the seeds array
    let PlantsCreated = await Plants.create(allPlants);

    // Feedback about Plants creation
    console.log(`Created ${PlantsCreated.length} Plants!`);

    // Close the connection
    await mongoose.connection.close();
  } catch (error) {
    console.log('An error occurred while connecting to DB', error);
  }
}
insertPlants();
