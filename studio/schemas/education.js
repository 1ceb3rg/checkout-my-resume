// Schema for an education with school, degree, field of study, startDate, endDate and description
export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [{
            name: 'school',
            title: 'School',
            type: 'string',
        },
        {
            name: 'degree',
            title: 'Degree',
            type: 'string',
        },
        {
            name: 'fieldOfStudy',
            title: 'Field of study',
            type: 'string',
        },
        {
            name: 'graduationDate',
            title: 'Graduation date',
            type: 'date',
        }
    ]
}
