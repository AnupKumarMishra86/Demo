---
id: 2
title: "CICD Pipelines for JAVA using Azure DevOps"
subtitle: "Learning CICD Pipelines for JAVA using Azure DevOps"
date: "2024-06-18"
---
# Setting Up CI/CD Pipelines for Java with Azure DevOps

This guide will walk you through setting up Continuous Integration (CI) and Continuous Deployment (CD) pipelines for a Java application using Azure DevOps.

## Prerequisites

Before starting, ensure you have the following:

- An Azure DevOps account.
- A project created in Azure DevOps.
- A Java application stored in a Git repository (e.g., GitHub, Azure Repos).
- An Azure subscription if you plan to deploy the application to an Azure service.

## Step 1: Creating a New Pipeline in Azure DevOps

1. **Navigate to Pipelines:**
   - Log in to your Azure DevOps account and navigate to your project.
   - Select the "Pipelines" tab from the left-hand menu.

2. **Create a New Pipeline:**
   - Click on the "New Pipeline" button.
   - Select the repository where your Java project is stored (GitHub, Azure Repos, etc.).
   - Follow the on-screen instructions to authenticate and authorize Azure DevOps to access your repository.

3. **Configure the Pipeline:**
   - Select the pipeline configuration that suits your project. You can start with the "Starter pipeline" template, or use the "Maven" or "Gradle" templates if your project uses those build tools.

   Here's an example of a YAML configuration for a Maven-based Java application:

   ```
   yaml
   trigger:
   - main

   pool:
     vmImage: 'ubuntu-latest'

   variables:
     mavenOpts: '-Xmx1024m'

   steps:
   - task: UseJavaVersion@1
     inputs:
       versionSpec: '11'
       jdkArchitectureOption: 'x64'

   - task: Maven@3
     inputs:
       mavenPomFile: 'pom.xml'
       goals: 'clean install'
       options: '-DskipTests'

   - task: PublishBuildArtifacts@1
     inputs:
       pathToPublish: '$(System.DefaultWorkingDirectory)/target'
       artifactName: 'java-app'
```
