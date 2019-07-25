// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import * as React from 'react';
import headspace from './../../images/headspace.png';
import { Header } from './../Dashboard/dashboard.css';
import * as classes from "./news-preview.css";
import { INewsData } from './../News/news-provider';
import { getShortenedTimeAndDate } from './../../util/Helpers';

interface INewsPreviewProps {
    newsData: INewsData[];
}

const NUMBER_OF_NEWS_PREVIEWS = 1;

const renderNewsPreview = (newsData: INewsData, key: number) => {
    return (
        <div className={classes.NewsDataContainer}>
            <img src={headspace} className={classes.NewsDataImage}/>
            <div className={classes.NewsDataTextContainer}>
                <label className={classes.NewsDataTitle}>{newsData.title}</label>
                <label className={classes.NewsDataDate}>{getShortenedTimeAndDate(new Date(newsData.date))}</label>
                <label>{newsData.desc}</label>
            </div>
        </div>
    );
}

const NewsPreview = (props: INewsPreviewProps) => {
    const {
        newsData
    } = props;

    const news = [];
    for (let i = 0; i < Math.min(NUMBER_OF_NEWS_PREVIEWS, newsData.length); i++) {
        news.push(renderNewsPreview(newsData[i], i));
    }

    return (
        <div>
            <div className={Header}>Latest News</div>
            {news}
        </div>
    );
};

export default NewsPreview;