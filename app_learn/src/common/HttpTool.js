/**
 * Created by liushuo on 17/4/19.
 */

import React , { Component } from 'react';

export  default class HttpTool extends Component{
    /*
     *  get请求
     *  url:请求地址
     *  data:参数
     *  callback:回调函数
     * */
    static get(url,params,callback){
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'GET',
            })
                .then((response) => response.json())
                .then((responseJSON) => {
                    resolve(responseJSON);
                }).catch(function (error) {
                    console.warn(error);
                    reject(error);
            });
        });
    }
    /*
     *  post请求
     *  url:请求地址
     *  data:参数
     *  callback:回调函数
     * */
    static post(url,params){
        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
                .then((response) => {
                    return response.json();
                })
                .then((jsonData) => {
                    resolve(jsonData);
                })
                .catch((error) => {
                    console.warn(error);
                    reject(error);
                });
        })

    }
}
