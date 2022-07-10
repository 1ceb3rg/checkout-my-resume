export default {
    name: 'item',
    title: 'Item',
    type: 'document',
    fields: [{
            name: 'title',
            title: 'Main title',
            type: 'string',
        }, {
            name: 'subTitle',
            title: 'Sub Title',
            type: 'string',
        },
        {
            name: 'startDate',
            title: 'Start date',
            type: 'string',
        },
        {
            name: 'endDate',
            title: 'End date',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        },
        {
            name: 'tasks',
            title: 'Tasks',
            type: 'array',
           
            
            of: [{
                type: 'object',
                name: 'task',
                fields: [{
                        name: 'description',
                        title: 'Description',
                        type: 'blockContent'
                    },
                    {
                        name: 'subtask',
                        title: 'SubTasks',
                        type: 'array',
                        of: [{
                            type: 'string'
                        }]
                    }
                ],
                preview: {
                    select: {
                      title: 'description',
                      
                    }
                  }
            }],
        }

    ]
}