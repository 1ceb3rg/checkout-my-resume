// Schema for a person with name, email, phone number, image, description  and education
export default{
        name: 'person',
        title: 'Person',
        type: 'document',
        fields: [{
                name: 'name',
                title: 'Name',
                type: 'string',
            },
            {
                name: 'email',
                title: 'Email',
                type: 'string',
            },
            {
                name: 'phone',
                title: 'Phone',
                type: 'string',
            },
            {
                name: 'education',
                title: 'Education',
                type: 'array',
                of: [{
                    type: 'reference',
                    to: [{
                        type: 'education'
                    }]
                }]
            },
            {
                name:'image',
                title: 'Image',
                type: 'image',
            },
            {
                name: 'description',
                title: 'Description',
                type: 'text',
            }
        ]
    }

