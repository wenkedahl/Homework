if (error) return console.warn(error)

var update = {
    x: [Object.values(bubbleData.otu_ids)],
            y: [Object.values(bubbleData.sample_values)],
            'marker.size': [Object.values(bubbleData.sample_values)],
            'marker.color': [Object.values(bubbleData.otu_ids)]
        };