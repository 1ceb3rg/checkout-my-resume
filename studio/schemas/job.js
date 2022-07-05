// A sanity schema for a job on a resume with the following fields: position, company, startDate, endDate, description, and array of tasks.
export default {
    name: 'job',
    title: 'Job',
    type: 'document',
    fields: [{
            name: 'company',
            title: 'Company',
            type: 'string',
        }, {
            name: 'position',
            title: 'Position',
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
            type: 'text',
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
                        type: 'text'
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