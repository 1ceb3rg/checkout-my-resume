export default {
    name:'section',
    title: 'Section',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description:'Section title',
            initialValue:"Professional Experience",
            type: 'string',
        },

            {
                name: 'items',
                title: 'Items',
                description:'Section items i.e. jobs',
                type: 'array',
                of: [{
                    type: 'reference',
                    to: [{
                        type: 'item',
                    }]
                }
        
        ]
    }]

}