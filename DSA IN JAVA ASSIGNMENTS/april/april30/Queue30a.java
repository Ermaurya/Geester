package assimnt4;

class Queue {
    private static int front, rear, capacity;
    private static int queue[];

    Queue(int c) {
        front = rear = 0;
        capacity = c;
        queue = new int[capacity];
    }

    static void queueEnqueue(int data) {

        if (capacity == rear) {
            System.out.printf("\nQueue is full\n");
            return;
        }

        else {
            queue[rear] = data;
            rear++;
        }
        return;
    }

    static void queueDequeue() {

        if (front == rear) {
            System.out.printf("\nQueue is empty\n");
            return;
        }

        else {
            for (int i = 0; i < rear - 1; i++) {
                queue[i] = queue[i + 1];
            }

            if (rear < capacity)
                queue[rear] = 0;

            rear--;
        }
        return;
    }

    static void queueDisplay() {
        int i;
        if (front == rear) {
            System.out.printf("\nQueue is Empty\n");
            return;
        }

        for (i = front; i < rear; i++) {
            System.out.printf(" %d <-- ", queue[i]);
        }
        return;
    }

    static void queueFront() {
        if (front == rear) {
            System.out.printf("\nQueue is Empty\n");
            return;
        }
        System.out.printf("\nFront Element is: %d", queue[front]);
        return;
    }
}

public class Queue30a {

    public static void main(String[] args) {
        Queue q = new Queue(4);

        Queue.queueDisplay();
        Queue.queueEnqueue(20);
        Queue.queueEnqueue(30);
        Queue.queueEnqueue(40);
        Queue.queueEnqueue(50);
        Queue.queueDisplay();
        Queue.queueEnqueue(60);
        Queue.queueDisplay();
        Queue.queueDequeue();
        Queue.queueDequeue();
        System.out.printf("\n\nafter two node deletion\n\n");
        Queue.queueDisplay();
        Queue.queueFront();
    }
}
