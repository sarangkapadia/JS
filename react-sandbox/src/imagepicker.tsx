import * as React from 'react'

const pivot_stock_images = 'f8218404-63dd-4670-b0f5-f8b50674f963';


export const ImagePicker: React.FunctionComponent = () => {
    const url = 'https://hubblecontent.osi.officeppe.net/contentsvc/m365contentpicker/index.html';
    const options = '?onlypivot=icons';
    const pivot = '/api/pivots/f8218404-63dd-4670-b0f5-f8b50674f963';
    const title = "Temporary content picker";

    let urlForPivot = "https://hubblecontent.osi.officeppe.net/contentsvc/api/pivots/0678df82-d05e-475d-9c04-5daa1f5c6d55";

    let urlForSearch = "https://hubblecontent.osi.office-int.net/contentsvc/api/pivots?search=dogs&top=7&filter=pivotNames/any";

    let xhr = new XMLHttpRequest();
    xhr.open("GET", urlForSearch);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(JSON.parse(xhr.responseText));
        }
    };

    xhr.send();


    return (
        <div>
            <iframe
                title={title}
                src={url + options}
                height={'600px'}
            />
            {/* <iframe
                title={title}
                src={url + pivot}
                height={'600px'}
            /> */}
        </div>
    )
}