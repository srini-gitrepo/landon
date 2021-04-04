var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.update({
    region: 'ap-south-1'
});

console.log('Writing entries to Welcome Links table.');

var dynamodb = new AWS.DynamoDB.DocumentClient();
var welcomeLinksData = JSON.parse(
    fs.readFileSync('../components/data/welcome_links.json', 'utf8')
);

welcomeLinksData.forEach(function (welcomeLink) {
    var className = welcomeLink.class;
    if (className.trim() == '') className = 'no_class';

    var params = {
        TableName: 'WelcomeLinks',
        Item: {
            src: welcomeLink.src,
            alt: welcomeLink.alt,
            class: className
        }
    };

    dynamodb.put(params, function (err, data) {
        if (err)
            console.error(
                'Unable to load data into table for welcome link',
                welcomeLink.src,
                '. Error: ',
                JSON.stringify(err, null, 2)
            );
        else console.log('Added', welcomeLink.src, 'to table.');
    });
});
