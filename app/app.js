// Parse init
import Parse from "parse"
import { parse_application_id, parse_javascript_key } from "config/constants"

Parse.initialize(parse_application_id, parse_javascript_key)



// Service Workers init
/*
import { mount as mountServiceWorker } from "service-worker"

mountServiceWorker()
*/



// React init
import React from "react"
import ReactDOM from "react-dom"
import Application from "components/Application"


ReactDOM.render(<Application />, document.getElementById("main"))
