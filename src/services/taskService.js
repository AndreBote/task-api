import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(completed) {
  const filter = completed !== undefined ? { completed } : {};
  return taskRepository.findAll(filter);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
