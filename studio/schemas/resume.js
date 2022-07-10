// a resume schema containing a person and jobs
export default {
    name: 'resume',
    title: 'Resume',
    type: 'document',
    fields: [
        {
            name:'name',
            title:'Resume Name',
            type:'string'
        },
        {
            name: 'jobTitle',
            title: 'Job title',
            type: 'string',

        },
        {
            name: 'person',
            title: 'Person',

            type: 'reference',
            to: [{
                type: 'person',
            }],



        },
        {
            name: 'sections',
            title: 'Sections',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{
                    type: 'section',
                }]
            }]

        },


       

    ]
}