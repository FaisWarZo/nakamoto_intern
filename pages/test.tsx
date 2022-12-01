/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function test() {
    return (
        <div>
            <label htmlFor="fname">First name:</label><br />
            <input type="text" id="fname" name="fname" defaultValue="John" /><br />
            <label htmlFor="lname">Last name:</label><br />
            <input type="text" id="lname" name="lname" defaultValue="Doe" /><br /><br />
            <input type="submit" defaultValue="Submit" />

            <p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>

        </div>


    )
}



