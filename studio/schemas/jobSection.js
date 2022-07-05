export default {
    name:'jobSection',
    title: 'Job Section',
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
                name: 'jobs',
                title: 'Jobs',
                type: 'array',
                of: [{
                    type: 'reference',
                    to: [{
                        type: 'job',
                    }]
                }
        
        ]
    }]

}