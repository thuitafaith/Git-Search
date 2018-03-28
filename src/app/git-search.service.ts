import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'
import 'rxjs/add/operator/toPromise';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class GitSearchService {

  results: Object[];
  result_one: any;
  repo_link: string;
  loading: boolean;

  constructor(private http: HttpClient) {
    this.results = [];
    this.result_one = [];
    this.loading = false;
  }
  search(term: string) {
    let httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'fc577cde942de0fe5f6ddeec8c0d554b9e45f482'
      })
    }
    let promise = new Promise((resolve, reject) => {
      let apiURL = environment.apiRoot + "users/" + term;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.results.push(res)
            //  this.repo_link = res['repos_url'];
            //console.log(this.results)results: Object[];
            //results.
            console.log(this.results)
            resolve();
          },
          msg => {//Error
            reject(msg);
          }

        ),
        this.http.get(environment.apiRoot + "users/" + term + "/repos")
          .toPromise()
          .then(
            resp => { // Success
              this.result_one = resp;
              //this.repo_link = res.repos_url;
              //console.log(this.results)results: Object[];
              console.log(this.result_one)
              //results.
              resolve();
            },
            msg => {//Error
              reject(msg);
            }

          )


    });
    return promise;

  }
}
