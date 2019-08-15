// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import * as React from 'react';

import DataCard from '../DataCard/data-card';
import { getShortenedTimeAndDate } from '../../util/Helpers';
import { IEventsData } from './events-interfaces';

import SearchPage from '../SearchPage/search-page';

// TODO: Remove hardcoded images
import event_forum from './../../images/event_forum.png';
import event_picnic from './../../images/event_picnic.jpg';
import event_roundtable from '../../images/event_roundtable.png';

interface IEventsProps {
    loading: boolean;
    query: string;
    filteredEventData: IEventsData[];
    handleInputChange: (event: any) => void;
}

const renderEvents = (filteredEventData: IEventsData[]) => {
    return filteredEventData.map(event => {
        let src = event_forum;
        if (event.title.indexOf("Picnic") >= 0) {
            src = event_picnic;
        }
        else if (event.title.indexOf("Roundtable") >= 0) {
            src = event_roundtable;
        }

        return (
            <DataCard
                key={event._id}
                match={{
                    url: 'http://www.google.com',
                    params: {}, isExact: false,
                    path: ''
                }}
                src={src}
                data={{
                    url: '/pages/stuff',
                    title: event.title,
                    subtitle: getShortenedTimeAndDate(new Date(event.date)),
                    secondarySubtitle: event.location,
                    description: event.desc,
                }}
            />
        );
    });
};

const EventsCanvas = (props: IEventsProps) => {
    const {
        loading,
        handleInputChange,
        query,
        filteredEventData
    } = props;

    return (
        <SearchPage
            loading={loading}
            header={"Upcoming Events"}
            searchBarProps={{
                placeholder: "Search for events by title, description, or location...",
                query,
                handleInputChange
            }}
        >
            {renderEvents(filteredEventData)}
        </SearchPage>
    );
}

export default EventsCanvas;