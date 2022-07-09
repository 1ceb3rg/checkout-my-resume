// A sanity schema for a job on a resume with the following fields: position, company, startDate, endDate, description, and array of tasks.
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
            type: 'date',
        },
        {
            name: 'endDate',
            title: 'End date',
            type: 'date',
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
                ]
            }],
        }

    ]
}