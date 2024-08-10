---
id: 1
title: "CICD Pipelines for asp.net using Azure DevOps"
subtitle: "Learning CICD Pipelines for asp.net using Azure DevOps"
date: "2024-08-09"
---
# Setting Up CI/CD Pipelines for ASP.NET Core with Azure DevOps

In this guide, we'll walk through the process of setting up Continuous Integration (CI) and Continuous Deployment (CD) pipelines for an ASP.NET Core application using Azure DevOps.

## Prerequisites

Before we begin, ensure you have the following:

- An Azure DevOps account.
- A project created in Azure DevOps.
- An ASP.NET Core application stored in a Git repository (e.g., GitHub, Azure Repos).
- An Azure subscription to deploy the application.

## Step 1: Creating a New Pipeline in Azure DevOps

1. **Navigate to Pipelines:**
   - Log in to your Azure DevOps account and go to the project where your repository is located.
   - Click on the "Pipelines" tab on the left menu.

2. **Create a New Pipeline:**
   - Click on the "New Pipeline" button.
   - Select the repository where your ASP.NET Core project is stored. You can choose GitHub, Azure Repos, Bitbucket, etc.
   - Follow the on-screen instructions to authorize Azure DevOps to access your repository.

3. **Configure the Pipeline:**
   - Choose the pipeline configuration you prefer. You can start with the "Starter pipeline" template, or use the ".NET Core" template which comes pre-configured for .NET projects.

   Here's an example of a YAML configuration for an ASP.NET Core application:

   ```
   yaml
   trigger:
   - main

   pool:
     vmImage: 'windows-latest'

   variables:
     buildConfiguration: 'Release'

   steps:
   - task: UseDotNet@2
     inputs:
       packageType: 'sdk'
       version: '6.x'
       installationPath: $(Agent.ToolsDirectory)/dotnet

   - task: DotNetCoreCLI@2
     inputs:
       command: 'restore'
       projects: '**/*.csproj'

   - task: DotNetCoreCLI@2
     inputs:
       command: 'build'
       projects: '**/*.csproj'
       arguments: '--configuration $(buildConfiguration)'

   - task: DotNetCoreCLI@2
     inputs:
       command: 'test'
       projects: '**/*.csproj'
       arguments: '--configuration $(buildConfiguration)'

   - task: PublishBuildArtifacts@1
     inputs:
       pathToPublish: '$(Build.ArtifactStagingDirectory)'
       artifactName: 'drop'
```