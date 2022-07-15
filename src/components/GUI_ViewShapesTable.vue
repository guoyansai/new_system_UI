<template>
    <div>
        <div id="table">
            <table class="table">
                <thead class="thead-dark table-sm">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>

                <tbody>
                    <!-- <tr
                                v-for="(item, key) in addPointList"
                                :key="key"
                                @click="getPointItem(item, key)"
                                :class="{ active: key == itemKey }"
                            >
                                <td>{{ key + 1 }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.type }}</td>
                                <td>{{ item.Digital }}</td>
                            </tr> -->
                    <tr>
                        <td>1</td>
                        <td>View_SLD_TG-E1_1A1=1A9</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">Move In</button>
            <button type="button" class="btn btn-secondary">Move Out</button>
            <button type="button" class="btn btn-secondary">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "guiViewShapesTable",

    data() {
        return {};
    },
};
</script>

<style scoped>
</style>