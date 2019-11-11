import Layout from '../components/Layout'
import React, { Component } from 'react'
import Head from 'next/head'

const GET_TODOS = `
    query GetTodos {
      allTodos {
        name
        id
      }
    }
  `;


const Index = () => (
    <Layout>
        <Head>
            <link href="/static/styles.css" rel="stylesheet" />

        </Head>
        <div class="app">
            <h1 class="main-heading">Welcome to Keystone&nbsp;5!</h1>
            <p class="intro-text">
                Here's a simple demo app that lets you add/remove todo items. Create a few entries, then go
    check them out from your <a href="/admin">Keystone 5 Admin UI</a>!
  </p>
            <hr class="divider" />
            <div class="form-wrapper">
                <h2 class="app-heading">To-Do List</h2>
                <div>
                    <form class="js-add-todo-form">
                        <input required name="add-item" placeholder="Add new item" class="form-input add-item" />
                    </form>
                </div>
                <div class="results">
                    <p>Loading...</p>
                </div>
            </div>
        </div>`
            </Layout>
)

Index.getInitialProps = async function() {
    fetch('/admin/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          GET_TODOS,
        }),
      }).then(function(result) {
          console.log(result)
        return result.json();
      });
  };


export default Index;


