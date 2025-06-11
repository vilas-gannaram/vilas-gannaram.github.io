---
   title: 'Docker'
   description: 'Introduction to Docker'
   date: '2025-06-12'
   categories: ['devOps', 'docker']
   published: true
---

Docker is an open-source tool that allows developers to easily build, ship, and run applications in containers. A container is a standalone executable package of software that includes everything the application needs to run (such as code, libraries, dependencies...).

## Why do we use it?

Imagine you’ve built an application, and want to share it with your team members for testing, deploying, or even running it on a local machine. However, your teammates may not have the same machine(runtime, OS, dependencies) as you do, causing the application to fail or behave unexpectedly.

To solve this problem, you would need to manually replicate your environment on every team member’s machine, which is time-consuming and error-prone.

This is where Virtual Machine comes in handy, later replaced by Containers.

## Virtual Machine (VM) & Container

Both VMs & Containers: allows you to create an isolated environment for the applications. This means you can package your application along with the required OS, libraries, and dependencies, ensuring it runs consistently across different machines.

**VMs** has some drawbacks:

- They require a full Operating System, making them **heavy on resources.**
- Booting up a VM takes **time** and **processing power.**
- Running multiple VMs on the same machine can slow down the performance.

**Containers:**

<!-- ![dc501852-1f9a-44d8-83ef-37651e229f31.jpg](attachment:1f01b37b-64d4-4e56-aade-6e7f5e6bc52a:dc501852-1f9a-44d8-83ef-37651e229f31.jpg) -->

## Usage

Don’t have a **docker engine** installed on your machine, Install it now : ) [Docker](https://docker.com/)

To use predefined docker images, you can get at [Docker Hub](https://hub.docker.com/)

```docker
From node:19-alpine

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "start"]
```

## Images & Containers

**Docker Image** is like a blueprint for the container, you can run multiple containers using a single **Docker Image**

## Port Forwarding/Mapping

## Layer Cache

## Volumes

# Docker Compose
