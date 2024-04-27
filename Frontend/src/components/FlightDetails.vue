<template>
    <div id="indvflightdetails">
        <div id="airlinename">
            <img id="logo" :src="flight.URL" class="airline-logo">
            <p id="content">{{ flight.airlineName }}</p>
        </div>
        <div id="otherdetails">
            <div id="tripdetails">
                <div id="sourcedetails">
                    <p id="etd">
                        <img class="plane-logo" src="../assets/68380.png">
                        &nbsp;{{ flight.etd }}
                    </p>
                    <p id="source">{{ flight.source }}</p>
                </div>
                <div id="durationdetails">
                    <p>
                        <span class="dashes">--------------&nbsp;</span>{{ flight.duration }}
                        <span class="dashes">&nbsp;--------------</span>
                    </p>
                </div>
                <div id="destinationdetails">
                    <p id="eta">
                        <img class="plane-logo" src="../assets/68542.png">
                        &nbsp;
                        {{ flight.eta }}
                    </p>
                    <p id="dest">{{ flight.destination }}</p>

                </div>
            </div>
            <div id="aircraftdetails">
                <p id="flightnum"><strong>Flight No: </strong>{{ flight.flightNo }}</p>
                <p><img id="aircraft-logo" src="../assets/airplane-logo.png">&nbsp;{{ flight.aircraftType }}</p>
            </div>
            <div id="statusdetails">
                <p id="gateno"><strong>Gate No: </strong>{{ flight.gateNo }}</p>
                <button id="status" :class="getStatusButtonClass(flight.status)" disabled>
                    {{ flight.status }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default
    {
        name: 'FlightDetails',
        props: {
            flight: Object
        },
        methods:
        {
            getStatusButtonClass(status) {
                switch (status) {
                    case 'Delayed':
                        return 'delayed-button';
                    case 'Onboarding':
                        return 'boarding-button';
                    case 'Departed':
                        return 'departed-button';
                    case 'On Time':
                        return 'ontime-button';
                    default:
                        return '';
                }
            }
        }
    }
</script>

<style>
#indvflightdetails {
    border: 10px solid transparent;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 15px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
    background-color: white;
    padding: 5px;
}

#airlinename {
    margin-bottom: 20px;
}

#airlinename #content {
    font-size: 22px;
    font-weight: bold;
}

#airlinename {
    display: flex;
}

.airline-logo {
    width: 5%;
    height: 3%;
}
.plane-logo
{
    width:25%;
    height:25%;
}
#aircraft-logo
{
    width:7%;
    height:7%;
}

#otherdetails {
    display: flex;
}

#tripdetails {
    width: 50%;
}

#aircraftdetails {
    width: 25%;
}

#statusdetails {
    width: 25%;
}

#tripdetails {
    display: flex;
}

#sourcedetails,
#destinationdetails {
    width: 20%;
}

#durationdetails {
    width: 60%;
    font-weight: bold;
    text-align: center;
}

#sourcedetails #etd,
#destinationdetails #eta {
    font-size: 20px;
    font-weight: bolder;
    padding-bottom: 10px;
}

#sourcedetails #source,
#destinationdetails #dest {
    font-style: italic;
}

#aircraftdetails,
#statusdetails {
    text-align: center;
}

#aircraftdetails #flightnum {
    padding-bottom: 10px;
}

#statusdetails #gateno {
    font-size: 20px;
    padding-bottom: 10px;
}

#status {
    width: 50%;
    color: white;
    padding: 10px 15px 10px 15px;
    border: 2px solid transparent;
    border-radius: 10px;
    font-weight: bold;
    font-size: 18px;
}

.delayed-button {
    background-color: #D70E0E;
}

.boarding-button {
    background-color: #0EBDD7;
}

.ontime-button {
    background-color: #1B9445;
}

.departed-button {
    background-color: #FFC107;
}

@media only screen and (max-width:500px) {
    #indvflightdetails {
        margin-bottom: 40px;
    }

    #airlinename {
        display: block;
        justify-content: center;
        text-align: center;
        margin-bottom: 30px;
    }

    .airline-logo {
        width: 7%;
        height: 5%;
    }

    #otherdetails {
        display: block;
    }

    #airlinename #logo {

        width: 20%;
    }

    #tripdetails {
        width: 100%;
        margin-bottom: 20px;
    }
    #aircraftdetails {
        width: 100%;
        margin-bottom: 20px;
    }

    #statusdetails {
        width: 100%;
    }

    .dashes {
        display: none;
    }

    #sourcedetails,
    #destinationdetails {
        width: 100%;
    }

    #sourcedetails #etd
    {
        display: block;
    }

    #durationdetails {
        width: 100%;
        text-align: center;
    }
}
</style>