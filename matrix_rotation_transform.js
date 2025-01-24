
// Matrix multiplication
function multiplyMatrices(A, B) {
    let result = [];
    for (let i = 0; i < A.length; i++) {
        result[i] = [];
        for (let j = 0; j < B[0].length; j++) {
            result[i][j] = 0;
            for (let k = 0; k < A[0].length; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
}

let matrix1 = [
    [1, 2, 3],
    [4, 5, 6]
];

let matrix2 = [
    [10, 11],
    [13, 14],
    [16, 17]
];

let multipliedMatrix = multiplyMatrices(matrix1, matrix2);
console.log("Multiplied Matrix:", multipliedMatrix);

// Rotation Matrix for Rotation around an axis (D1)
function rotationMatrix(theta, axis) {
    let cosTheta = Math.cos(theta);
    let sinTheta = Math.sin(theta);
    let [x, y, z] = axis;

    return [
        [cosTheta + (1 - cosTheta) * x * x, (1 - cosTheta) * x * y - sinTheta * z, (1 - cosTheta) * x * z + sinTheta * y],
        [(1 - cosTheta) * y * x + sinTheta * z, cosTheta + (1 - cosTheta) * y * y, (1 - cosTheta) * y * z - sinTheta * x],
        [(1 - cosTheta) * z * x - sinTheta * y, (1 - cosTheta) * z * y + sinTheta * x, cosTheta + (1 - cosTheta) * z * z]
    ];
}

// Apply rotation to a vector
function rotateVector(vector, matrix) {
    return [
        vector[0] * matrix[0][0] + vector[1] * matrix[0][1] + vector[2] * matrix[0][2],
        vector[0] * matrix[1][0] + vector[1] * matrix[1][1] + vector[2] * matrix[1][2],
        vector[0] * matrix[2][0] + vector[1] * matrix[2][1] + vector[2] * matrix[2][2]
    ];
}

// Applying rotation
let rotationAxis = [255, 255, 255]; // D1 axis
let theta = Math.PI / 4; // 45 degree rotation
let rotationMat = rotationMatrix(theta, rotationAxis);

// Color vector C0 (RGB)
let C0 = [100, 150, 200];
let C1 = rotateVector(C0, rotationMat);
console.log("Transformed Color C1:", C1);

// Second Transformation to Keep Color within the RGB Cube
// This could involve clamping the values to stay within [0, 255] range and applying projection

function secondTransformation(vector) {
    return vector.map(val => Math.max(0, Math.min(val, 255))); // Clamping RGB values to valid range
}

let C2 = secondTransformation(C1);
console.log("Transformed Color C2 (within RGB cube):", C2);
